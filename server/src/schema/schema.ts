// const { users } = require("../../sampleData");

// const {
//     buildSchema,
//     GraphQLSchema,
//     GraphQLObjectType,
//     GraphQLString,
// } = require("graphql");

// // const schema = buildSchema(`
// //   type Query {
// //     hello(name: String!): String
// //     user: User
// //   }

// //   type User {
// //     id: Int
// //     name: String
// //   }
// // `);

// const User = new GraphQLObjectType({
//     name: "User",
//     fields: {
//         id: { type: GraphQLString },
//         name: {
//             type: GraphQLString,
//             resolve: (user) => {
//                 return user.name;
//             },
//         },
//     },
// });

// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: "Query",
//         fields: {
//             hello: {
//                 type: GraphQLString,
//                 resolve: () => {
//                     return "Hello, world!";
//                 },
//             },
//             user: {
//                 type: User,
//                 resolve: () => {
//                     return {
//                         id: 1,
//                         name: "Sam",
//                     };
//                 },
//             },
//         },
//     }),
// });

// const {
//     graphQLObjectType,
//     GraphQLSchema,
//     GraphQLString,
//     GraphQLID,
// } = require("graphql");

// const UserType = new GraphQLObjectType({
//     name: "User",
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         email: { type: GraphQLString },
//         phone: { type: GraphQLString },
//     }),
// });

// const RootQuery = new GraphQLObjectType({
//     name: "RootQueryType",
//     fields: {
//         user: {
//             type: UserType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, args) {
//                 return users.find((user) => user.id === args.id);
//             },
//         },
//     },
// });

// module.exports = new GraphQLSchema({
//     query: RootQuery,
// });

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import parseCookies from "../utils/parseCookie";
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];

const resolvers = {
    Query: {
        // books: async (parent: any, args: any, contextValue: any) => {
        //   const token = contextValue.cookie['sb-127-auth-token']
        //   console.log(JSON.parse(token));
        //     const {
        //         data: { user },
        //     } = await supabase.auth.getUser(JSON.parse(token).access_token);
        //     console.log(user);
        //     return books;
        // },
        languages: async () => {
            const { data: languages, error } = await supabase
                .from("Language")
                .select("*");
            if (error) {
                throw error;
            }
            return languages;
        }
    },
};

export { typeDefs, resolvers };
