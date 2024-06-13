const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 3001;

const schema = require("./schema/schema");
const { GraphQLID, graphql } = require("graphql");
const { createHandler } = require("graphql-http/lib/use/express");
const { ruruHTML } = require("ruru/server");

const app = express();

// The root provides a resolver function for each API endpoint
// let root = {
//     hello: ({ name }) => {
//         return "Hello, " + name;
//     },

//     user: () => {
//         return {
//             id: 1,
//             name: "Sam",
//         };
//     },
// };

app.get("/", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.all(
    "/graphql",
    createHandler({
        schema: schema,
    })
);

// Start the server at port
app.listen(
    port,
    console.log(
        `Running a GraphQL API server at http://localhost:${port}/graphql`
    )
);
