'use client';

import { useShopOptionsStore } from "@/hooks/useShopOptionsStore";
import useShopQuery from "@/hooks/useShopQuery";

//TODO: need to adjust result 

const ResultText = () => {
  const { show } = useShopOptionsStore((state) => state);
  const { count } = useShopQuery();

  return <p className="border-l border-l-footer-highlight px-5">Showing 1-{show} of {count} results</p>
}

export default ResultText;