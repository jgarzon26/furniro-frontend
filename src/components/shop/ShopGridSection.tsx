'use client';

import { useShopOptionsStore } from "@/hooks/useShopOptionsStore";
import { CardItem } from "../common";

const ShopGridSection = () => {
  const { show } = useShopOptionsStore(state => state);

  return (
    <section className="p-20">
      <ul className="grid grid-cols-5 gap-7">
        {
          Array.from({length: show}).map((_, index) => (
            <CardItem key={index}/>
          ))
        }
      </ul>
    </section>
  )
}

export default ShopGridSection;