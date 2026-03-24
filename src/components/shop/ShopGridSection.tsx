'use client';

import { CardItem } from "../common";
import useShopQuery from "@/hooks/useShopQuery";

const ShopGridSection = () => {
  const { items } = useShopQuery();

  return (
    <section className="p-20">
      {
        items.length > 0 ? (
          <ul className="grid grid-cols-5 gap-7">
            {
              items.map((item, index) => (
                <CardItem key={index} />
              ))
            }
          </ul>
        ) : (
          <h2>No Products</h2>
        )

      }
    </section>
  )
}

export default ShopGridSection;