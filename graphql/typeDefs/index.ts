import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    ping: String!
    test(message: String!): String!
  }
`;
