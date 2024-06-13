const { users } = require("../sampleData");

const {
    buildSchema,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require("graphql");

// const schema = buildSchema(`
//   type Query {
//     hello(name: String!): String
//     user: User
//   }

//   type User {
//     id: Int
//     name: String
//   }
// `);

const User = new GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: GraphQLString },
        name: {
            type: GraphQLString,
            resolve: (user) => {
                return user.name;
            },
        },
    },
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            hello: {
                type: GraphQLString,
                resolve: () => {
                    return "Hello, world!";
                },
            },
            user: {
                type: User,
                resolve: () => {
                    return {
                        id: 1,
                        name: "Sam",
                    };
                },
            },
        },
    }),
});

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

module.exports = schema;
