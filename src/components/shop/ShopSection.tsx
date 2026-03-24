'use client';

import { useShopOptionsStore } from "@/hooks/useShopOptionsStore";
import { GET_PRODUCTS_BY_PAGE } from "@/lib/documents/products";
import { GetProductsByPageQuery, GetProductsByPageQueryVariables } from "@/types/generated/graphql";
import { QueryRef, useBackgroundQuery } from "@apollo/client/react";
import { createContext, FC, Suspense, useContext } from "react";
import { OptionsTabSection, PaginationSection, ShopGridSection } from ".";
import HomeLoading from "@/app/home/loading";

type ProductQueryRef = QueryRef<GetProductsByPageQuery, GetProductsByPageQueryVariables, "complete" | "streaming">;

const ShopQueryRefContext = createContext<ProductQueryRef | undefined>(undefined);

export const useShopQueryRefContext = () => {
  const context = useContext(ShopQueryRefContext);

  if (!context) {
    throw new Error('This hook must be used under ShopDataWrapper');
  }

  return context;
}

const ShopSection: FC = () => {
  const { page, show, short } = useShopOptionsStore(state => state);
  const [queryRef] = useBackgroundQuery(GET_PRODUCTS_BY_PAGE, {
    variables: {
      options: {
          page,
          itemsPerPage: show,
          search: short.length > 0 ? short : undefined,
      }
    },
  });
  const ctx: ProductQueryRef = queryRef;

  return (
    <ShopQueryRefContext value={ctx}>
      <Suspense fallback={<HomeLoading />}>
        <OptionsTabSection />
        <ShopGridSection />
        <PaginationSection />
      </Suspense>
    </ShopQueryRefContext>
  );
}

export default ShopSection;