import { FC } from "react";
import { TextField } from "../common";

const CheckoutFormSection: FC = () => {
  return (
    <section className="flex flex-1 flex-col gap-5">
      <h3 className="font-semibold text-[36px]">Billing details</h3>
      <div className="flex flex-row items-center gap-5">
        <div className="flex-1">
          <TextField label="First Name" name="firstName" />
        </div>
        <div className="flex-1">
          <TextField label="Last Name" name="lastName" />
        </div>
      </div>
      <TextField label="Company Name (Optional)" name="company" />
      <TextField label="Country / Region" name="country" placeholder="Sri Lanka" />
      <TextField label="Street Address" name="address" />
      <TextField label="Town / City" name="city" />
      <TextField label="Province" name="province" placeholder="Western Province" />
      <TextField type="number" label="ZIP Code" name="zip" />
      <TextField type="tel" label="Phone" name="phone" />
      <TextField type="email" label="Email" name="email" />
      <TextField label="" name="info" placeholder="Additional information" />
    </section>
  );
}

export default CheckoutFormSection;