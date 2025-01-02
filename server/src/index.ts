import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import "./utils/config/logging";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { getServiceSupabase } from "./utils/dataSource/db/supabase";
import prisma from "./utils/dataSource/db/prisma";
import parseCookies from "./utils/middleware/parseCookie";
import { MyContext } from "./utils/types/context";
import { GraphQLError } from "graphql";
import {
    authTokenName,
    DEVELOPMENT,
    origin,
    SERVER_HOSTNAME,
    SERVER_PORT,
} from "./utils/config/config";
import { loggingHandler } from "./utils/middleware/loggingHandler";
import { authMiddleware } from "./utils/middleware/auth";

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

logging.log("----------------------------------------");
logging.log("Initializing API");
logging.log("----------------------------------------");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

logging.log("----------------------------------------");
logging.log("Logging & Configuration");
logging.log("----------------------------------------");
if (DEVELOPMENT) {
    app.use(parseCookies());
    app.use(
        cors<cors.CorsRequest>({
            origin: origin,
            credentials: true,
        })
    );
} else {
    app.use(authMiddleware);
}
app.use(loggingHandler);

logging.log("----------------------------------------");
logging.log("Starting Server");
logging.log("----------------------------------------");

const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
    "/graphql",
    expressMiddleware(server, {
        context: async ({ req }): Promise<MyContext> => {
            if (req.cookies?.introspection) {
                // @ts-expect-error: Introspection cookie is used for internal purposes only
                return null;
            }
            let token;

            if (DEVELOPMENT) {
                if (!req.cookies[authTokenName]) {
                    throw new GraphQLError("User is not authenticated", {
                        extensions: {
                            code: "UNAUTHENTICATED",
                            http: { status: 401 },
                        },
                    });
                }
                token = req.cookies[authTokenName].access_token;
            } else {
                token = req.headers["authorization"]!.split(" ")[1];
            }
            const supabase = getServiceSupabase();
            const {
                data: { user },
            } = await supabase.auth.getUser(token);

            if (!user) {
                throw new GraphQLError("User is not authenticated", {
                    extensions: {
                        code: "UNAUTHENTICATED",
                        http: { status: 401 },
                    },
                });
            }
            return {
                cookies: req.cookies,
                dataSources: {
                    supabase,
                    prisma,
                },
                user,
            };
        },
    })
);

await new Promise<void>((resolve) =>
    httpServer.listen({ port: SERVER_PORT }, resolve)
);

logging.log("----------------------------------------");
logging.log(`Server started on ${SERVER_HOSTNAME}:${SERVER_PORT}/graphql`);
logging.log("----------------------------------------");
