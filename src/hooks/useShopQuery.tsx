'use client';

import { useSuspenseQuery } from "@tanstack/react-query";
import { useShopOptionsStore } from "./useShopOptionsStore";
import { fetchData } from "@/lib/api";

const useShopQuery = () => {
  const { page, show } = useShopOptionsStore(state => state);
  const { data } = useSuspenseQuery({
    queryKey: ['shop', page, show],
    queryFn: () => fetchData(page, show),
  });

  return { ...data };
}

export default useShopQuery;