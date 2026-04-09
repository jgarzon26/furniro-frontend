'use client';

import { getAuthBearerToken } from "@/lib/api/token";
import { GraphQLURL } from "@/lib/api/urls";
import { HttpLink } from "@apollo/client";
import { ApolloClient, ApolloNextAppProvider, InMemoryCache } from "@apollo/client-integration-nextjs";
import { SetContextLink } from "@apollo/client/link/context";
import { FC, PropsWithChildren } from "react";

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: GraphQLURL,
  });

  const authLink = new SetContextLink(({headers}) => {
    const token = getAuthBearerToken();
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
}


const ApolloWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

export default ApolloWrapper;