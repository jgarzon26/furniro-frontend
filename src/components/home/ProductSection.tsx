import { CardItem, SizedBox, TextButton } from "../common";
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
      <TextButton className="px-20 py-3 bg-button-secondary text-button-secondary-foreground border border-button-secondary-foreground">
        <p>Show More</p>
      </TextButton>
    </SectionWrapper>
  );
}

export default ProductSection;