import { CartSection } from "@/components/cart";
import { FC } from "react";

const CartPage: FC = () => {
  return (
    <main className="flex flex-row justify-between gap-10 min-h-100 p-10">
      <CartSection />
    </main>
  );
}

export default CartPage;