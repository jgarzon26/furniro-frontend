import { query } from "@/lib/client";
import { Spacer } from "../common";
import ExploreMoreButton from "./ExploreMoreButton";
import ProductCarousel from "./ProductCarousel";
import { GET_RANDOM_PRODUCTS } from "@/lib/documents/products";

const DisplaySection = async () => {
  //TODO: Make this background color rely on theme
  const { data, error } = await query({
    query: GET_RANDOM_PRODUCTS,
    variables: {
      options: {
        limit: 8,
      },
    },
  });

  return (
    <section className="flex flex-row bg-[#FCF8F3] py-10">
      <Spacer />
      <article className="flex flex-3 flex-col justify-center gap-5">
        <h2 className="leading-[120%]">50+ Beautiful rooms inspiration</h2>
        <p className="w-2/3">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <ExploreMoreButton />
      </article>
      <article className="flex-7 overflow-hidden">
        { error && <p>Failed to fetch products</p> }
        { data && <ProductCarousel query={data}/>}
      </article>
    </section>
  );
}

export default DisplaySection;