'use client';

import { useShopOptionsStore } from "@/hooks/useShopOptionsStore";
import useShopQuery from "@/hooks/useShopQuery";
import { FC } from "react";

//TODO: need to adjust result 

const ResultText: FC = () => {
  const { show, page } = useShopOptionsStore((state) => state);
  const { count } = useShopQuery();
  const start = (page - 1) * show + 1;
  const end = Math.min(page * show, count ?? 1); 

  return <p className="border-l border-l-footer-highlight px-5">Showing {start}-{end} of {count} results</p>
}

export default ResultText;