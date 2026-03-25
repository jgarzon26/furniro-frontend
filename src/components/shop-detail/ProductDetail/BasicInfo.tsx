'use client';

import { Rating } from "@/components/common";
import useShopDetailQuery from "@/hooks/useShopDetailQuery";
import { FC } from "react";

const BasicInfo: FC = () => {
  const { title, price, discountedPrice, shortDescription } = useShopDetailQuery();

  return (
    <>
      <article>
        <h2 className="font-normal text-[42px]">{title}</h2>
        <div className="flex flex-row gap-5">
          <h4 className="font-medium text-shop-detail-highlight">{discountedPrice ? discountedPrice : price}</h4>
          {discountedPrice && (
            <h5 className="text-[16px] line-through">{price}</h5>
          )}
        </div>
      </article>
      <article className="flex flex-row items-center gap-3">
        <Rating count={4.5} />
        <p className="text-shop-detail-highlight text-[13px] border-l border-l-shop-detail-divider px-5">5 Customer Review</p>
      </article>
      <article className="w-2/3 flex-1">
        <p>{shortDescription}</p>
      </article>
    </>
  );
}

export default BasicInfo;