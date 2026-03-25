'use client';

import { FC } from "react";
import { Placeholder } from "@/components/common";
import useShopDetailQuery from "@/hooks/useShopDetailQuery";

const DescriptionPanel: FC = () => {
  const { description } = useShopDetailQuery();

  return (
    <article className="px-20 py-10 flex flex-col gap-10 text-shop-detail-highlight">
      <p>{description}</p>
      <div className="flex flex-row gap-10">
        <Placeholder className="flex-1 aspect-3/2"/>
        <Placeholder className="flex-1 aspect-3/2"/>
      </div>
    </article>
  );
}

export default DescriptionPanel;