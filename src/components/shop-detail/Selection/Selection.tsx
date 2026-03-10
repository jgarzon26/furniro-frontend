'use client';

import { createContext, FC, PropsWithChildren, use, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  label: string;
  onSelectionChange?: (value: string | null) => void;
}

type SelectionState = {
  value: string | null;
}

type SelectionAction = {
  setValue: (value: string) => void;
}

type SelectionContextType = SelectionState & SelectionAction;

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

const initialData: SelectionState = {
  value: null,
}

export const useSelectionContext = () => {
  const context = use(SelectionContext);

  if (!context) {
    throw new Error('useSelectionContext should be used in the children of "Selection"');
  }

  return context;
}

const Selection: FC<Props & PropsWithChildren> = ({ label, className, onSelectionChange, children }) => {
  const [selection, setSelection] = useState<SelectionState>(initialData);

  const context: SelectionContextType = {
    ...selection,
    setValue: (value) => {
      setSelection(prev => ({ ...prev, value }));
      onSelectionChange?.(selection.value);
    },
  }

  return (
    <SelectionContext value={context}>
      <input type="hidden" name={label.toLowerCase()} id={label.toLowerCase()} value={selection.value ?? ''}/>
      <article className={twMerge('flex flex-col gap-5', className)}>
        <h6 className="text-[14px] text-shop-detail-highlight capitalize">{label}</h6>
        <div className='flex flex-row items-center gap-3'>
          {children}
        </div>
      </article>
    </SelectionContext>
  );
}

export default Selection;