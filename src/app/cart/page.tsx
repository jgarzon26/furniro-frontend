import { CartDetail, CartTable } from "@/components/cart";

const CartPage = () => {
  return (
    <main className="flex flex-row justify-between gap-10 min-h-100 p-10">
      <CartTable />
      <CartDetail />
    </main>
  );
}

export default CartPage;