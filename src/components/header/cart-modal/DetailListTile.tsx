import { IconButton, Placeholder } from "@/components/common";
import { Close } from "@/components/common/icons";
import { CartItemShortFragment } from "@/types/generated/graphql";
import { FC } from "react";

type Props = {
  item: CartItemShortFragment;
}

const DetailListTile: FC<Props> = ({ item }) => {
  const { product, quantity } = item;
  const { title, price } = product;

  return (
    <li className="flex flex-row items-center gap-3">
      <div className="flex-1">
        <Placeholder className="aspect-square rounded-[10px]" />
      </div>
      <div className="flex flex-3 flex-col ml-3 gap-1">
        <h5 className="font-normal">{title}</h5>
        <div className="flex flex-row items-center justify-between gap-5">
          <span>{quantity}</span>
          <span className="text-[12px]">X</span>
          <span className="text-[12px] text-primary flex-1">$ {price}</span>
          <span />
        </div>
      </div>
      <div className="flex items-end justify-center">
        <IconButton icon={Close} color="var(--footer-highlight)" />
      </div>
    </li>
  );
}

export default DetailListTile;