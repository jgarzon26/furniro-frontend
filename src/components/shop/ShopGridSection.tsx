'use client';

import { CardItem } from "../common";
import useShopQuery from "@/hooks/useShopQuery";

const ShopGridSection = () => {
  const { currentItems } = useShopQuery();

  return (
    <section className="p-20">
      <ul className="grid grid-cols-5 gap-7">
        {
          currentItems.map((_, index) => (
            <CardItem key={index}/>
          ))
        }
      </ul>
    </section>
  )
}

export default ShopGridSection;