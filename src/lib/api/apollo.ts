import { SetContextLink } from "@apollo/client/link/context";
import { getAuthBearerToken } from "./token";
import { HttpLink } from "@apollo/client";
import { GraphQLURL } from "./urls";

export const getGqlLink = () => {
  const httpLink = new HttpLink({
    uri: GraphQLURL,
  });

  const authLink = new SetContextLink(({ headers }) => {
    const token = getAuthBearerToken();
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  });

  return authLink.concat(httpLink);
}
