'use client';

import { useReadQuery } from "@apollo/client/react";
import { useShopQueryRefContext } from "@/components/shop/ShopSection";

const useShopQuery = () => {
  const queryRef = useShopQueryRefContext();
  const { data, error } = useReadQuery(queryRef);
  const { products } = data;

  return { ...products, error };
}

export default useShopQuery;