import { Spacer } from "@/components/common";
import CheckoutButton from "./CheckoutButton";

const CartDetail = () => {
  return (
    <section className="flex flex-col bg-cart w-1/4 px-20 *:flex-1">
      <h3 className="text-center mt-5">Cart Totals</h3>
      <Spacer />
      <article>
        <div className="flex flex-row items-center justify-between">
          <h5>Subtotal</h5>
          <Spacer />
          <p className="text-footer-highlight">Rs. 250,000.00</p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h5>Total</h5>
          <Spacer />
          <p className="text-primary text-[20px]">Rs. 250,000.00</p>
        </div>
      </article>
      <Spacer />
      <CheckoutButton />
      <Spacer />
    </section>
  );
}

export default CartDetail;