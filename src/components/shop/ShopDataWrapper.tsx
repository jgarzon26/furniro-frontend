'use client';

import HomeLoading from "@/app/home/loading";
import { useShopOptionsStore } from "@/hooks/useShopOptionsStore";
import { fetchData } from "@/lib/api";
import { usePrefetchQuery } from "@tanstack/react-query";
import { FC, PropsWithChildren, Suspense } from "react";

const ShopDataWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { page, show } = useShopOptionsStore((state) => state);
  usePrefetchQuery({
    queryKey: ['shop', page, show],
    queryFn: () => fetchData(page, show),
  });

  return (
    <Suspense fallback={<HomeLoading />}>
      {children}
    </Suspense>
  );
}

export default ShopDataWrapper;