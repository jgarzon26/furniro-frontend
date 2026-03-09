import { FC, PropsWithChildren } from "react";
import { Placeholder } from "../common";

const ProductImageContainer: FC<PropsWithChildren> = ({children}) => {
  return (
    <Placeholder className="rounded-[10px]">{children}</Placeholder>
  );
}

const ProductImagesDisplay: FC = () => {
  return (
    <section className="flex flex-1 flex-row gap-10">
      <article className="flex flex-1 flex-col gap-10 mb-20">
        <ProductImageContainer>2</ProductImageContainer>
        <ProductImageContainer>3</ProductImageContainer>
        <ProductImageContainer>4</ProductImageContainer>
        <ProductImageContainer>5</ProductImageContainer>
      </article>
      <article className="flex-5">
        <ProductImageContainer>1</ProductImageContainer>
      </article>
    </section>
  );
}

export default ProductImagesDisplay;