import { Category } from "@/types/generated/graphql";
import { Placeholder } from "../common";
import { FC } from "react";

type Props = {
  category: Category;
}

const CategoryListItem: FC<Props> = ({ category }) => {
  const { title } = category;

  return (
    <li className="flex flex-col items-center aspect-2/3 h-75 relative">
      <Placeholder className="rounded-[10px] h-11/12"/>
      <h4>{title}</h4>
    </li>
  );
}

export default CategoryListItem;