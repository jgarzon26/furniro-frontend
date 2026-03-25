'use client';

import { FC } from "react";
import { Facebook, LinkedIn, Twitter } from "@/components/common/icons";
import { IconButton } from "@/components/common";
import MetaListTile from "./MetaListTile";
import useShopDetailQuery from "@/hooks/useShopDetailQuery";

const ProductMetaDetails: FC = () => {
  const { sku, tags } = useShopDetailQuery();
  const iconSize = 20;

  return (
    <>
      <hr className="my-5 border-shop-detail-divider"/>
      <article className="w-2/3 flex flex-col gap-3">
        <MetaListTile title="SKU">{sku}</MetaListTile>
        <MetaListTile title="Category">Sofas</MetaListTile>
        <MetaListTile title="Tags">
          {
            tags && tags.join(',')
          }
        </MetaListTile>
        <MetaListTile title="Share" className="[&_svg]:text-foreground" descClassName="gap-3">
          <IconButton icon={Facebook} size={iconSize}/>
          <IconButton icon={LinkedIn} size={iconSize}/>
          <IconButton icon={Twitter} size={iconSize}/>
        </MetaListTile>
      </article>
    </>
  );
}

export default ProductMetaDetails;