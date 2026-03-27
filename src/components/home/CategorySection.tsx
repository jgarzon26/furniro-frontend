import { query } from "@/lib/client";
import CategoryListView from "./CategoryListView";
import HomeHeader from "./HomeHeader";
import SectionWrapper from "./SectionWrapper";
import { GET_CATEGORIES } from "@/lib/documents/categories";

const CategorySection = async () => {
  const { data, error } = await query({
    query: GET_CATEGORIES,
  });

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
      {error && <p>Error fetch categories</p>}
      {data && <CategoryListView categories={data.categories}/>}
    </SectionWrapper>
  );
}

export default CategorySection;