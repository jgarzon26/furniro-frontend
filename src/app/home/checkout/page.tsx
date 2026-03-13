import { CheckoutDetailSection, CheckoutFormSection } from "@/components/checkout";
import { FC } from "react";

const CheckoutPage: FC = () => {
  return (
    <main>
      <form action="" className="flex flex-row justify-center gap-50 px-80 py-20">
        <CheckoutFormSection />
        <CheckoutDetailSection />
      </form>
    </main>
  );
}

export default CheckoutPage;