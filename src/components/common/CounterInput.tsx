'use client';

import { FC, useEffect, useState } from "react";

type Props = {
  initial?: number;
  name?: string;
  onChange?: (value: number) => void;
}

const CounterInput: FC<Props> = ({ initial, name, onChange }) => {
  const [counter, setCounter] = useState(initial ?? 1);
  const buttonStyle = "font-medium p-5 hover:bg-shop-detail-highlight hover:text-primary-foreground";

  useEffect(() => {
    onChange?.(counter);
  }, [counter, onChange])

  const onDecrement = () => {
    setCounter(prev => prev - 1);
  }

  const onIncrement = () => {
    setCounter(prev => prev + 1);
  }

  name = name?.toLowerCase();

  return (
    <div className="flex flex-row items-center gap-5 border border-shop-detail-divider rounded-[10px] w-fit overflow-clip">
      <input type="hidden" name={name ?? 'counter'} id={name ?? 'counter'} value={counter}/>
      <button onClick={onDecrement} disabled={counter - 1 <= 0} className={buttonStyle}>-</button>
      <p>{counter}</p>
      <button onClick={onIncrement} className={buttonStyle}>+</button>
    </div>
  );
}

export default CounterInput;