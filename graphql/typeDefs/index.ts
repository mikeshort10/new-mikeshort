import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    ping: String!
    test(message: String!): String!
  }
`;
