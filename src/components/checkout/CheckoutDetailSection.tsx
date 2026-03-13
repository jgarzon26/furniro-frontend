import { FC } from "react";
import CheckoutListTile from "./CheckoutListTile";
import { TextButton } from "@/components/common";
import ProductDetailTile from "./ProductDetailTile";

const CheckoutDetailSection: FC = () => {
  return (
    <section className="flex flex-1 flex-col mt-10 gap-10">
      <article className="flex flex-col gap-5">
        <CheckoutListTile
          title={'h4'}
          titleChildren='Product'
          subtitle={'h4'}
          subtitleChildren='Subtotal'
        />
        <ProductDetailTile />
        <CheckoutListTile
          title={'p'}
          titleChildren='Subtotal'
          subtitle={'p'}
          subtitleChildren={`Rs. 250,000.00`}
        />
        <CheckoutListTile
          title={'p'}
          titleChildren='Total'
          subtitle={'h4'}
          subtitleChildren={`Rs. 250,000.00`}
          subtitleClassName="text-primary"
        />
      </article>
      <hr className="border border-checkout-divider"/>
      <p>
        Your personal data will be used to support your experience throughout this website, 
        to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy</span>.
      </p>
      <TextButton type="submit" className="bg-transparent border border-foreground rounded-2xl self-center w-1/2">
          <TextButton.Text className="text-foreground">Place order</TextButton.Text>
      </TextButton>
    </section>
  );
}

export default CheckoutDetailSection;