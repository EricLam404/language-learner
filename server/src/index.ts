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
    origin,
    SERVER_HOSTNAME,
    SERVER_PORT,
} from "./utils/config/config";
import { loggingHandler } from "./utils/middleware/loggingHandler";

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

logging.log("----------------------------------------");
logging.log("Initializing API");
logging.log("----------------------------------------");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

logging.log("----------------------------------------");
logging.log("Logging & Configuration");
logging.log("----------------------------------------");
app.use(parseCookies());
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
    cors<cors.CorsRequest>({
        origin: origin,
        credentials: true,
    }),
    express.json(),
    expressMiddleware(server, {
        context: async ({ req }): Promise<MyContext> => {
            if (req.cookies.introspection) {
                // @ts-expect-error: Introspection cookie is used for internal purposes only
                return null;
            }
            if (!req.cookies[authTokenName]) {
                throw new GraphQLError("User is not authenticated", {
                    extensions: {
                        code: "UNAUTHENTICATED",
                        http: { status: 401 },
                    },
                });
            }
            const token = req.cookies[authTokenName].access_token;
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

// console.log(`Server started on ${SERVER_HOSTNAME}:${SERVER_PORT}/graphql`);
logging.log("----------------------------------------");
logging.log(`Server started on ${SERVER_HOSTNAME}:${SERVER_PORT}/graphql`);
logging.log("----------------------------------------");
