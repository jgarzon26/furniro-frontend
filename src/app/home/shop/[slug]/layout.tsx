import Footer from "@/components/footer/Footer";
import { NavBar } from "@/components/shop-detail";
import ProductDetailWrapper from "@/components/shop-detail/ProductDetail/ProductDetailWrapper";
import { PreloadQuery } from "@/lib/client";
import { GET_PRODUCT } from "@/lib/documents/products";
import { FC, Suspense } from "react";
import HomeLoading from "../../loading";

const ShopDetailLayout: FC<LayoutProps<'/home/shop/[slug]'>> = async ({ children, params }) => {
  const { slug } = await params;

  return (
    <>
      <PreloadQuery query={GET_PRODUCT} variables={{ input: { slug } }}>
        {
          (queryRef) => (
            <Suspense fallback={<HomeLoading />}>
              <ProductDetailWrapper queryRef={queryRef}>
                <NavBar  />
                {children}
              </ProductDetailWrapper>
            </Suspense>
          )
        }
      </PreloadQuery>
      <Footer />
    </>
  );
}

export default ShopDetailLayout;