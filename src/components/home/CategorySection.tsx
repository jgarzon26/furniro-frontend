import CategoryListItem from "./CategoryListItem";
import HomeHeader from "./HomeHeader";
import SectionWrapper from "./SectionWrapper";

const CategorySection = () => {
  return (
    <SectionWrapper>
      <HomeHeader>
        <h3>Browse The Range</h3>
        <HomeHeader.Subtitle>
          Explore thoughtfully curated collections designed to bring harmony and style to every corner of your home.
          From elegant dining essentials to cozy living room accents and serene bedroom pieces, discover furniture and
          décor crafted to transform your space with comfort and sophistication.
        </HomeHeader.Subtitle>
      </HomeHeader>
      <ul className="flex flex-row gap-5 justify-center w-full h-100">
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
      </ul>
    </SectionWrapper>
  );
}

export default CategorySection;