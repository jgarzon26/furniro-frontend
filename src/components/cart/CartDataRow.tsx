import { IconButton, Placeholder } from "@/components/common";
import { Delete } from "@/components/common/icons";

const CartDataRow = () => {
  return (
    <tr>
      <td><Placeholder /></td>
      <td>Product Name</td>
      <td className="text-footer-highlight">Rs. 250,000.00</td>
      <td className="flex items-center justify-center border w-1/3">
        1
      </td>
      <td>Rs. 250,000.00</td>
      <td>
        <IconButton icon={Delete} size={28} color="var(--primary)" />
      </td>
    </tr>
  );
}

export default CartDataRow;