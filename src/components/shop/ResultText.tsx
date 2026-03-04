'use client';

import { useShopOptionsStore } from "@/hooks/useShopOptionsStore";

const ResultText = () => {
  const { show } = useShopOptionsStore((state) => state);

  return <p className="border-l border-l-footer-highlight px-5">Showing 1-{show} of 32 results</p>
}

export default ResultText;