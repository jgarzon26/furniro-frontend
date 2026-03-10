import { FC } from "react";
import { Selection, SelectionItem } from "./Selection";
import { twMerge } from "tailwind-merge";

const SizeSelection: FC = () => {
  const style = 'rounded-[5px] flex items-center justify-center bg-shop-detail-select aspect-square p-2';
  const activeStyle = 'bg-shop-detail-active';

  return (
    <Selection label="Size">
      <SelectionItem name="L" className={twMerge(style, 'px-3')} activeClassName={activeStyle}>L</SelectionItem>
      <SelectionItem name="XL" className={style} activeClassName={activeStyle}>XL</SelectionItem>
      <SelectionItem name="XS" className={style} activeClassName={activeStyle}>XS</SelectionItem>
    </Selection>
  );
}

export default SizeSelection;