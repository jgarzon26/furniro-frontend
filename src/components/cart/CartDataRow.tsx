import { IconButton, Placeholder } from "@/components/common";
import { Delete } from "@/components/common/icons";

const CartDataRow = () => {
  return (
    <tr>
      <td className="h-40 p-8">
        <div className="h-full bg-primary/22 rounded-lg">
          <Placeholder />
        </div>
      </td>
      <td>Product Name</td>
      <td className="text-footer-highlight">Rs. 250,000.00</td>
      <td className="flex justify-center items-center h-full">
        <p className="flex items-center justify-center border border-cart-border rounded-[5px] w-1/3 p-2">1</p>
      </td>
      <td>Rs. 250,000.00</td>
      <td>
        <IconButton icon={Delete} size={28} color="var(--primary)" />
      </td>
    </tr>
  );
}

export default CartDataRow;