import { GetCategoriesQuery, GetCategoriesQueryVariables } from "@/types/generated/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const GET_CATEGORIES: TypedDocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables> = gql`
  query GetCategories {
    categories {
      slug
      title
    }
  }
`;