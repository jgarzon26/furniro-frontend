import { query } from "@/lib/client";
import { GET_CATEGORIES } from "@/lib/documents/categories";
import { FC } from "react";
import CategoryListItem from "./CategoryListItem";

const CategoryListView: FC = async () => {
  const { data, error } = await query({
    query: GET_CATEGORIES,
  });

  if(!data && error) {
    return <p>Failed to fetch categories</p>
  }

  const { categories } = data!;

  return (
    <ul className="flex flex-row gap-5 justify-stretch w-2/3 h-100 overflow-x-auto overflow-y-hidden px-10 py-5">
      {
        categories.map(cat => (
          <CategoryListItem key={cat.slug} category={cat}/>
        ))
      }
    </ul>
  );
}

export default CategoryListView;