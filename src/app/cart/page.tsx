import { IconButton, Placeholder, Spacer } from "@/components/common";
import { Delete } from "@/components/common/icons";

const CartPage = () => {
  return (
    <main className="flex flex-row justify-between gap-10 min-h-75 p-10">
      <table className="table-fixed h-full w-full [&_td]:p-2">
        <colgroup>
          <col className="w-1/8"/>
          <col />
          <col />
          <col className="w-1/8"/>
          <col />
          <col className="w-1/16"/>
        </colgroup>
        <thead className="h-15 bg-cart">
          <tr className="*:text-start">
            <th />
            <th>Product</th>
            <th>Price</th>
            <th className="text-center">Quantity</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Placeholder /></td>
            <td>Product Name</td>
            <td className="text-footer-highlight">Rs. 250,000.00</td>
            <td className="flex items-center justify-center border w-1/3">
              1
            </td>
            <td>Rs. 250,000.00</td>
            <td>
              <IconButton icon={Delete} size={28} color="var(--primary)"/>
            </td>
          </tr>
        </tbody>
      </table>
      <section className="flex flex-col justify-between bg-cart w-1/4 px-20 *:flex-1">
        <h3 className="text-center">Cart Totals</h3>
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
        <button type="button" className="border rounded-2xl w-1/2 h-15 self-center">
          Check Out
        </button>
        <Spacer />
      </section>
    </main>
  );
}

export default CartPage;