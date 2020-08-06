import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "../../graphql";
import { NextApiRequest, NextApiResponse } from "next";

export const config = { api: { bodyParser: false } };

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: (req: NextApiRequest, res: NextApiResponse) => ({ req, res }),
});

export default apolloServer.createHandler({ path: "/api/graphql" });

exports.handler = apolloServer.createHandler();
exports.graphqlHandler = apolloServer.createHandler();
