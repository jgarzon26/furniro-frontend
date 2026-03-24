import {
  GetProductQuery,
  GetProductQueryVariables,
  GetProductsByPageQuery,
  GetProductsByPageQueryVariables,
} from "@/types/generated/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const GET_PRODUCTS_BY_PAGE: TypedDocumentNode<
  GetProductsByPageQuery,
  GetProductsByPageQueryVariables
> = gql`
  query GetProductsByPage($options: ProductsOption) {
    products(options: $options) {
      count,
      items {
        sku
        slug
        title
        subtitle
        price
        discountedPrice
      },
      totalPages
    }
  }
`;

export const GET_PRODUCT: TypedDocumentNode<GetProductQuery, GetProductQueryVariables> = gql`
  query GetProduct($input: ProductInput!) {
    product(input: $input) {
      sku
      title
      subtitle
      description
      shortDescription
      price
      discountedPrice
      images
      tags
      reviews {
        title
        comment
      }
    }
  }
`;
