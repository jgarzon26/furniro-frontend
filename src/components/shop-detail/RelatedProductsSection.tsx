import { FC } from "react";
import { CardItem, TextButton } from "@/components/common";
import { query } from "@/lib/client";
import { GET_RELATED_PRODUCTS } from "@/lib/documents/products";
import RelatedProductsList from "./RelatedProductsList";

type Props = {
  slug: string;
}

const RelatedProductsSection: FC<Props> = async ({ slug }) => {
  const { data, error } = await query({
    query: GET_RELATED_PRODUCTS,
    variables: {
      options: {
        slug,
        limit: 15,
      },
    },
  });

  return (
    <section className="flex flex-col items-center justify-center gap-10 border-t border-t-shop-detail-divider">
      <h3 className="text-[36px]">Related Products</h3>
      {error && <p>Error fetching related products</p>}
      {data && <RelatedProductsList data={data}/>}
      <TextButton className="bg-transparent border border-primary py-2 group hover:bg-primary duration-300">
        <TextButton.Text className="text-primary group-hover:text-primary-foreground">Show More</TextButton.Text>
      </TextButton>
    </section>
  );
}

export default RelatedProductsSection;