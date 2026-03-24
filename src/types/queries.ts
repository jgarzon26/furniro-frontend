import { QueryRef } from "@apollo/client/react";
import { GetProductQuery, GetProductQueryVariables } from "./generated/graphql";

export type ProductQueryRef = QueryRef<GetProductQuery, GetProductQueryVariables>;