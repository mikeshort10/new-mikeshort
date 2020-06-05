import { ApolloServer } from "apollo-server-micro";
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

export default apolloServer.createHandler({ path: "/api/graphql" });

exports.handler = apolloServer.createHandler();
exports.graphqlHandler = apolloServer.createHandler();
