'use client';

import { FC } from "react";
import CartTable from "./CartTable";
import CartDetail from "./CartDetail";
import { useSuspenseQuery } from "@apollo/client/react";
import { GET_USER_CART } from "@/lib/documents/users";
import { CombinedGraphQLErrors } from "@apollo/client";
import { useRouter } from "next/navigation";

const CartSection: FC = () => {
  const { replace } = useRouter();
  const { data, error } = useSuspenseQuery(GET_USER_CART, {
    queryKey: ['cart'],
  });

  if(error) {
    if(CombinedGraphQLErrors.is(error) && error.extensions?.code === 'UNAUTHENTICATED') {
      replace('/');
    } else {
      return <div>{error.message}</div>;
    }
  }

  const { items, totalPrice } = data.user.cart;

  return (
    <>
      <CartTable items={items}/>
      <CartDetail totalPrice={totalPrice}/>
    </>
  );
}

export default CartSection;