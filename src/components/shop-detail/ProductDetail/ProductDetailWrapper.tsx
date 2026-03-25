'use client';

import { ProductQueryRef } from "@/types/queries";
import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

type Props = {
  queryRef: ProductQueryRef;
}

type ProductDetailState = {
  queryRef: ProductQueryRef;
}

const ProductDetailContext = createContext<ProductDetailState | undefined>(undefined);

const ProductDetailWrapper: FC<Props & PropsWithChildren> = ({ queryRef, children }) => {
  const [productDetailState] = useState<ProductDetailState>({ queryRef });

  const ctx: ProductDetailState = {
    ...productDetailState,
  }

  return (
    <ProductDetailContext value={ctx}>
      {children}
    </ProductDetailContext>
  );
}

export const useProductDetailContext = () => {
  const context = useContext(ProductDetailContext);

  if(!context) {
    throw new Error('useProductDetailContext should be used as children of ProductDetailWrapper');
  }

  return context;
}

export default ProductDetailWrapper;