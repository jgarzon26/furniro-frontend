import { query } from "@/lib/client";
import { GET_RANDOM_PRODUCTS } from "@/lib/documents/products";
import { FC } from "react";
import { CardItem } from "@/components/common";

const ProductGridView: FC = async () => {
  const { data, error } = await query({
    query: GET_RANDOM_PRODUCTS,
    variables: {
      options: {
        limit: 8,
      },
    },
  });

  if(error) {
    return <p>Failed to fetch product</p>;
  }

  return (
    <ul className="grid grid-cols-4 gap-7">
      {data?.randomProducts.map(product => (
        <CardItem key={product.slug} product={product} />
      ))}
    </ul>
  );
}

export default ProductGridView;