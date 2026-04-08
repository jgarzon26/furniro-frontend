import { 
  AddToCartMutation, 
  AddToCartMutationVariables, 
  GetUserCartQuery, 
  GetUserCartQueryVariables, 
  LoginQuery, 
  LoginQueryVariables, 
  RemoveFromCartMutation, 
  RemoveFromCartMutationVariables 
} from "@/types/generated/graphql";
import { gql, TypedDocumentNode } from "@apollo/client";

export const LOGIN: TypedDocumentNode<LoginQuery, LoginQueryVariables> = gql`
  query Login($input: LoginInput!) {
    login(input: $input) {
      token
      message
    }
  }
`;

export const CART_SHORT: TypedDocumentNode = gql`
  fragment CartShort on Cart {
    items {
      product {
        sku
        title
        price
      }
      quantity
    }
  }
`;

export const CART_RES_SHORT: TypedDocumentNode = gql`
  fragment CartResShort on CartUpdateRes {
    cart {
      ...CartShort
    }
    message
  }
`;

export const GET_USER_CART: TypedDocumentNode<GetUserCartQuery, GetUserCartQueryVariables> = gql`
  query GetUserCart {
    user {
      cart {
        ...CartShort
      }
    }
  }
`;

export const ADD_OR_UPDATE_CART: TypedDocumentNode<AddToCartMutation, AddToCartMutationVariables> = gql`
  mutation AddToCart($input: AddCartInput!) {
    addToCart(input: $input) {
      ...CartResShort
    }
  }
`;

export const UPDATE_OR_REMOVE_CART: TypedDocumentNode<RemoveFromCartMutation, RemoveFromCartMutationVariables> = gql`
  mutation RemoveFromCart($input: RemoveCartInput!) {
    removeFromCart(input: $input) {
      ...CartResShort
    }
  }
`;