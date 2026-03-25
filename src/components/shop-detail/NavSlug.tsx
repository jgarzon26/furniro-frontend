'use client';

import useShopDetailQuery from "@/hooks/useShopDetailQuery";
import { FC } from "react";

const NavSlug: FC = () => {
  const { title } = useShopDetailQuery();

  return (
    <h5 className="border-l border-l-shop-detail-divider px-10 font-normal h-1/3 flex justify-center items-center capitalize">
      {title}
    </h5>
  );
}

export default NavSlug;