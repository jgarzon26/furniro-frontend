import { ProductDetailSection, ProductInfoSection, RelatedProductsSection } from "@/components/shop-detail";
import { PreloadQuery } from "@/lib/client";
import { GET_PRODUCT } from "@/lib/documents/products";
import { FC, Suspense } from "react";

const ShopDetailPage: FC<PageProps<'/home/shop/[slug]'>> = async ({ params }) => {
  const { slug } = await params;

  return (
    <main className="*:p-10 flex flex-col gap-20 mb-30">
      <PreloadQuery query={GET_PRODUCT} variables={{ input: { slug } }}>
        {
          (queryRef) => (
            <Suspense>
              <ProductDetailSection queryRef={queryRef} />
              <ProductInfoSection queryRef={queryRef}/>
            </Suspense>
          )
        }
      </PreloadQuery>
      <Suspense>
        <RelatedProductsSection />
      </Suspense>
    </main>
  );
}

export default ShopDetailPage;