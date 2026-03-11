import { FC } from "react";
import { CardItem, TextButton } from "@/components/common";

const RelatedProductsSection: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 border-t border-t-shop-detail-divider">
      <h3 className="text-[36px]">Related Products</h3>
      <ul className="flex flex-row justify-center items-center gap-5">
        {
          Array.from({length: 5}).map((_, index) => (
            <CardItem key={index}/>
          ))
        }
      </ul>
      <TextButton className="bg-transparent border border-primary py-2 group hover:bg-primary duration-300">
        <TextButton.Text className="text-primary group-hover:text-primary-foreground">Show More</TextButton.Text>
      </TextButton>
    </section>
  );
}

export default RelatedProductsSection;