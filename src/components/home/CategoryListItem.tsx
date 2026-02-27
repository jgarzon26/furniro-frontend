import { Placeholder } from "../common";

const CategoryListItem = () => {
  return (
    <li className="flex flex-col items-center">
      <Placeholder className="aspect-2/3 rounded-[10px] h-11/12"/>
      <h4>Title</h4>
    </li>
  );
}

export default CategoryListItem;