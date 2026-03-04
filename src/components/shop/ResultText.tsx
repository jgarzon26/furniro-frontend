'use client';

import { useShopOptionsStore } from "@/hooks/useShopOptionsStore";
import { fetchData } from "@/lib/api";
import useSWR from "swr";

const ResultText = () => {
  const { show } = useShopOptionsStore((state) => state);
  const { data: shop } = useSWR('/api/shop', fetchData);

  return <p className="border-l border-l-footer-highlight px-5">Showing 1-{show} of {shop?.length} results</p>
}

export default ResultText;