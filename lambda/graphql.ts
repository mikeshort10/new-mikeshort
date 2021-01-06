// import { ApolloServer } from "apollo-server-lambda";
// import { typeDefs, resolvers } from "../graphql/index";

// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: (req, res) => ({ req, res }),
// });

export const config = {
  api: {
    bodyParser: false,
  },
};

// exports.handler = apolloServer.createHandler();
// exports.graphqlHandler = apolloServer.createHandler();
