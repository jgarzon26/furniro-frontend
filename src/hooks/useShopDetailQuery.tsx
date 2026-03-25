'use client';

import { useProductDetailContext } from "@/components/shop-detail/ProductDetail/ProductDetailWrapper";
import { useReadQuery } from "@apollo/client/react";

const useShopDetailQuery = () => {
  const { queryRef } = useProductDetailContext();
  const { data, error } = useReadQuery(queryRef);

  return { ...data.product, error };
}

export default useShopDetailQuery;