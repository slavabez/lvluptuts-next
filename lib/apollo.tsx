import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";
import * as React from "react";
import {NextComponentType, NextPageContext} from "next";

interface CustomContext extends NextPageContext {
  apolloClient?: any;
}

export function withApollo(PageComponent): NextComponentType {
  const WithApollo = props => {
    return (
      <ApolloProvider client={initApolloClient()}>
        <PageComponent {...props} />
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

    if (typeof window === `undefined`){
      // Not in a browser
      if (context.res && context.res.finished){
        return pageProps;
      }

      try {
        const { getDataFromTree } = await import("@apollo/react-ssr");
        await getDataFromTree(<AppTree pageProps={pageProps} />);
      } catch (e) {

      }
    }
  };

  return WithApollo;
}

const initApolloClient = () => {
  return new ApolloClient({
    uri: `http://localhost:3000/api/graphql`,
    fetch
  });
};
