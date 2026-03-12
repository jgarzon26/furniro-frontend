import { IntroSection } from "@/components/common";
import Footer from "@/components/footer/Footer";
import FooterBenefits from "@/components/footer/FooterBenefits";
import { FC } from "react";

const CartLayout: FC<LayoutProps<'/home/cart'>> = ({children}) => {
  return (
    <>
      <IntroSection />
      {children}
      <FooterBenefits />
      <Footer />
    </>
  );
}

export default CartLayout;