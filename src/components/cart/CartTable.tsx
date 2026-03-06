import CartDataRow from "./CartDataRow";

const CartTable = () => {
  return (
    <table className="table-fixed h-full w-full">
      <colgroup>
        <col className="w-1/8" />
        <col />
        <col />
        <col className="w-1/12" />
        <col />
        <col className="w-1/16" />
      </colgroup>
      <thead className="h-15 bg-cart">
        <tr className="*:text-start">
          <th />
          <th>Product</th>
          <th>Price</th>
          <th>
            <p className="flex justify-center items-center">Quantity</p>
          </th>
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