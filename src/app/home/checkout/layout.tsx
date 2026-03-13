import { IntroSection } from "@/components/common";
import Footer from "@/components/footer/Footer";
import FooterBenefits from "@/components/footer/FooterBenefits";
import { FC } from "react";

const CheckoutLayout: FC<LayoutProps<'/home/checkout'>> = ({children}) => {
  return (
    <>
      <IntroSection />
      {children}
      <FooterBenefits />
      <Footer />
    </>
  );
}

export default CheckoutLayout;