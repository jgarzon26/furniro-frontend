'use client';

import { GraphQLURL } from "@/lib/api/urls";
import { HttpLink } from "@apollo/client";
import { ApolloClient, ApolloNextAppProvider, InMemoryCache } from "@apollo/client-integration-nextjs";
import { FC, PropsWithChildren } from "react";

const makeClient = () => {
  const link = new HttpLink({
    uri: GraphQLURL,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
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