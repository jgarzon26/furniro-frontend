'use client';

import { FC } from "react";
import { CounterInput, TextButton } from "@/components/common";

const ShopActions: FC = () => {
  const buttonStyle = "bg-transparent border border-foreground rounded-2xl hover:bg-secondary";
  const textStyle = "text-[20px] font-medium text-foreground";

  return (
    <article className="flex flex-row items-center gap-5">
      <CounterInput name="quantity" />
      <TextButton className={buttonStyle}>
        <TextButton.Text className={textStyle}>Add To Cart</TextButton.Text>
      </TextButton>
      <TextButton className={buttonStyle}>
        <TextButton.Text className={textStyle}>+ Compare</TextButton.Text>
      </TextButton>
    </article>
  );
}

export default ShopActions;