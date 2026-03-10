'use client';

import { FC, PropsWithChildren } from "react";
import { useSelectionContext } from "./Selection";
import { twMerge } from "tailwind-merge";

type Props = {
  name: string;
  className?: string;
  activeClassName?: string;
}

const SelectionItem: FC<Props & PropsWithChildren> = ({ name, className, activeClassName, children }) => {
  const { value, setValue } = useSelectionContext();

  const isActive = value === name;

  const onSelect = () => {
    setValue(name);
  }

  return (
    <button onClick={onSelect} className={twMerge('hover:cursor-pointer', className, isActive && activeClassName)}>
      {children}
    </button>
  );
}

export default SelectionItem;