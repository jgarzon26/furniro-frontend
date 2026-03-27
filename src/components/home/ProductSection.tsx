import { ShowMoreButton, SizedBox } from "@/components/common";
import HomeHeader from "./HomeHeader";
import SectionWrapper from "./SectionWrapper";
import ProductGridView from "./ProductGridView";

const ProductSection = async () => {
  
  return (
    <SectionWrapper>
      <HomeHeader className="mb-5">
        <h2>Our Products</h2>
      </HomeHeader>
      <ProductGridView />
      <SizedBox height={40}/>
      <ShowMoreButton />
    </SectionWrapper>
  );
}

export default ProductSection;