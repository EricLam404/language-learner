// npm install @apollo/server express graphql cors
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import { resolvers, typeDefs } from "./schema/schema.ts";
import parseCookies from "./utils/parseCookie.ts";

dotenv.config();
const port = process.env.PORT || 4000;
interface MyContext {
    token?: string;
}

// Required logic for integrating with Express
const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
// Ensure we wait for our server to start
await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
    "/graphql",
    cors<cors.CorsRequest>({
        origin: ["http://localhost:3000"],
        credentials: true,
    }),
    express.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
        context: async ({ req }) => ({ cookie: parseCookies(req.headers.cookie ?? '') })
    })
);

// Modified server startup
await new Promise<void>((resolve) =>
    httpServer.listen({ port: port }, resolve)
);
console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
