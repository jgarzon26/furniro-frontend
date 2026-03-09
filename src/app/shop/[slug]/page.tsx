
import { FC } from "react";

const ShopDetailPage: FC<PageProps<'/shop/[slug]'>> = async ({ params }) => {
  const { slug } = await params;

  return (
    <main>
      
    </main>
  );
}

export default ShopDetailPage;