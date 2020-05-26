import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-fetch";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import { createHttpLink } from "apollo-link-http";

const link = createHttpLink({ uri: "/api/graphql", fetch });

const client = new ApolloClient({ link, cache: new InMemoryCache() });

const NextApp = ({ Component, pageProps }: AppPropsType) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default NextApp;
