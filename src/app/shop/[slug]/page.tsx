
import { ProductDetailSection } from "@/components/shop-detail";
import { FC } from "react";

const ShopDetailPage: FC<PageProps<'/shop/[slug]'>> = async ({ params }) => {
  const { slug } = await params;

  return (
    <main className="px-10 py-5">
      <ProductDetailSection slug={slug}/>
    </main>
  );
}

export default ShopDetailPage;