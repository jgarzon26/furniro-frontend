import {
  GetProductQuery,
  GetProductQueryVariables,
  GetProductsByPageQuery,
  GetProductsByPageQueryVariables,
  GetRelatedProductsQuery,
  GetRelatedProductsQueryVariables,
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
        images
      },
      totalPages
    }
  }
`;

export const PRODUCT_SHORT: TypedDocumentNode = gql`
  fragment ProductShort on Product {
    sku
    slug
    title
    subtitle
    price
    discountedPrice
    images
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
      category {
        slug
        title
      }
      reviews {
        title
        comment
      }
    }
  }
`;

export const GET_RELATED_PRODUCTS: TypedDocumentNode<GetRelatedProductsQuery, GetRelatedProductsQueryVariables> = gql`
  query GetRelatedProducts($options: ProductsRelatedOption!) {
    relatedProducts(options: $options) {
      sku
      slug
      title
      subtitle
      price
      discountedPrice
      images
    }
  }
`;