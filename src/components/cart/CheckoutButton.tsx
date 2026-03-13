'use client';

import { useRouter } from "next/navigation";
import { FC } from "react";

const CheckoutButton: FC = () => {
  const { push } = useRouter();

  return (
    <button type="button" onClick={() => push('/home/checkout')} className="flex items-center justify-center border rounded-2xl w-10/12 h-15 self-center py-3 hover:cursor-pointer">
      <p className="text-[20px]">Check Out</p>
    </button>
  );
}

export default CheckoutButton;