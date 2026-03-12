import Footer from "@/components/footer/Footer";
import { NavBar } from "@/components/shop-detail";
import { FC } from "react";

const ShopDetailLayout: FC<LayoutProps<'/home/shop/[slug]'>> = async ({children, params}) => {
  const { slug } = await params;

  return (
    <>
      <NavBar slug={slug}/>
      {children}
      <Footer />
    </>
  );
}

export default ShopDetailLayout;