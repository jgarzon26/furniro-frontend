'use client';

import { getGqlLink } from "@/lib/api/apollo";
import { ApolloClient, ApolloNextAppProvider, InMemoryCache } from "@apollo/client-integration-nextjs";
import { FC, PropsWithChildren } from "react";

const makeClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: getGqlLink(),
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