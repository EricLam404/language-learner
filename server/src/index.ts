// npm install @apollo/server express graphql cors
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import { typeDefs } from "./schema/typeDefs.generated.ts";
import { resolvers } from "./schema/resolvers.generated.ts";
import supabaseClient from "./utils/db.ts";
import parseCookies from "./utils/parseCookie.ts";
import { MyContext } from "./utils/types/context.ts";

dotenv.config();
const port = process.env.PORT || 4000;

const app = express();
app.use(parseCookies());

const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
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
            const supabase = supabaseClient(token);
            return {
                cookies: req.cookies,
                supabase,
            };
        },
    })
);

await new Promise<void>((resolve) =>
    httpServer.listen({ port: port }, resolve)
);

console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
