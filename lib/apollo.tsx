import ApolloClient, { PresetConfig } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";
import * as React from "react";
import { NextPageContext } from "next";
import Head from "next/head";
import { InMemoryCache } from "apollo-cache-inmemory";

interface CustomContext extends NextPageContext {
  apolloClient?: any;
}

interface CustomConfig extends PresetConfig {
  ssrMode?: boolean;
}

export function withApollo(PageComponent): any {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  WithApollo.getInitialProps = async (context: CustomContext) => {
    const { AppTree } = context;
    const apolloClient = (context.apolloClient = initApolloClient());

    let pageProps = {};
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(context);
    }

    if (typeof window === `undefined`) {
      // Not in a browser, server side
      if (context.res && context.res.finished) {
        return pageProps;
      }

      try {
        const { getDataFromTree } = await import("@apollo/react-ssr");
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient
            }}
          />
        );
      } catch (e) {
        console.error(e);
      }

      Head.rewind();
    }
    const apolloState = apolloClient.cache.extract();
    return {
      ...pageProps,
      apolloState
    };
  };

  return WithApollo;
}

const initApolloClient = (initialState = {}) => {
  const cache = new InMemoryCache().restore(initialState);
  const config: CustomConfig = {
    uri: `http://localhost:3000/api/graphql`,
    fetch,
    cache
  };

  return new ApolloClient(config);
};
