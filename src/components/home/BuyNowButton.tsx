'use client';

import { FC } from "react";
import { TextButton } from "@/components/common";
import { useRouter } from "next/navigation";

const BuyNowButton: FC = () => {
  const { push } = useRouter();

  return (
    <TextButton className="w-1/3" onClick={() => push('/home/shop')}>
      <p className="uppercase font-bold">Buy Now</p>
    </TextButton>
  );
}

export default BuyNowButton;