const { users } = require("../sampleData");

const { buildSchema } = require("graphql");
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

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

module.exports = schema;
