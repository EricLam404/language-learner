import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import './utils/config/logging';

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";
import { getServiceSupabase } from "./utils/db/supabase";
import prisma from "./utils/db/prisma";
import parseCookies from "./utils/middleware/parseCookie";
import { MyContext } from "./utils/types/context";
import { GraphQLError } from "graphql";
import { SERVER_HOSTNAME, SERVER_PORT } from "./utils/config/config";
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
        origin: ["http://localhost:3000"],
        credentials: true,
    }),
    express.json(),
    expressMiddleware(server, {
        context: async ({ req }): Promise<MyContext> => {
            const token = req.cookies["sb-127-auth-token"].access_token;
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
