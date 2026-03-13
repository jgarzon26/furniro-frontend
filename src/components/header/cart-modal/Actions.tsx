'use client';

import { FC } from "react";
import ActionButton from "./ActionButton";
import { useRouter } from "next/navigation";

type Props = {
  onClose?: () => void;
};

const Actions: FC<Props> = ({onClose}) => {
  const router = useRouter();

  return (
    <section className="flex flex-row justify-between items-center">
      <ActionButton onClick={() => {
        onClose?.();
        router.push('/home/cart');
      }}>Cart</ActionButton>
      <ActionButton onClick={() => {
        onClose?.();
        router.push('/home/checkout');
      }}>Checkout</ActionButton>
      <ActionButton>Comparison</ActionButton>
    </section>
  );
}

export default Actions;