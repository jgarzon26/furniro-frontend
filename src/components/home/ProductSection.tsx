import { CardItem, ShowMoreButton, SizedBox } from "@/components/common";
import HomeHeader from "./HomeHeader";
import SectionWrapper from "./SectionWrapper";

const ProductSection = () => {
  return (
    <SectionWrapper>
      <HomeHeader className="mb-5">
        <h2>Our Products</h2>
      </HomeHeader>
      <ul className="grid grid-cols-4 gap-7">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </ul>
      <SizedBox height={40}/>
      <ShowMoreButton />
    </SectionWrapper>
  );
}

export default ProductSection;