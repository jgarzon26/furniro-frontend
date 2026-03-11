import { FC } from "react";
import { Selection, SelectionItem } from "../Selection";
import { twMerge } from "tailwind-merge";

const ColorSelection: FC = () => {
  const style = "p-4 rounded-[50px]";

  return (
    <Selection label="Color">
      <SelectionItem name="#816DFA" activeClassName={twMerge(style, 'bg-[#816DFA]')} className={twMerge(style, 'bg-[#816DFA]/50')}></SelectionItem>
      <SelectionItem name="#000000" activeClassName={twMerge(style, 'bg-[#000000]')} className={twMerge(style, 'bg-[#000000]/50')}></SelectionItem>
      <SelectionItem name="#B88E2F" activeClassName={twMerge(style, 'bg-[#B88E2F]')} className={twMerge(style, 'bg-[#B88E2F]/50')}></SelectionItem>
    </Selection>
  );
}

export default ColorSelection;