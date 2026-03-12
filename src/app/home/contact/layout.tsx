import { IntroSection } from "@/components/common";
import Footer from "@/components/footer/Footer";
import FooterBenefits from "@/components/footer/FooterBenefits";
import { Metadata } from "next";
import { FC } from "react";

export const metaData: Metadata = {
  title: 'Contact',
}

const ContactLayout: FC<LayoutProps<'/home/contact'>> = ({children}) => {
  return (
    <>
      <IntroSection />
      {children}
      <FooterBenefits />
      <Footer />
    </>
  );
}

export default ContactLayout;