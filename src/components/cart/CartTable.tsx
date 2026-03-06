import CartDataRow from "./CartDataRow";

const CartTable = () => {
  return (
    <table className="table-fixed h-full w-full [&_td]:p-2">
      <colgroup>
        <col className="w-1/8" />
        <col />
        <col />
        <col className="w-1/8" />
        <col />
        <col className="w-1/16" />
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
        <CartDataRow />
      </tbody>
    </table>
  );
}

export default CartTable;