import { Spacer } from "@/components/common";

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
      <button type="button" className="flex items-center justify-center border rounded-2xl w-10/12 h-15 self-center py-3">
        <p className="text-[20px]">Check Out</p>
      </button>
      <Spacer />
    </section>
  );
}

export default CartDetail;