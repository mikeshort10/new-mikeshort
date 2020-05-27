import { ApolloServer } from "apollo-server-lambda";
import { typeDefs, resolvers } from "../../graphql/index";
import { NextApiRequest, NextApiResponse } from "next";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: (req: NextApiRequest, res: NextApiResponse) => ({ req, res }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

exports.handler = apolloServer.createHandler();
exports.graphqlHandler = apolloServer.createHandler();
