import { FC } from "react";
import { BsArrowRight } from "react-icons/bs";

const ProductFirstItemDetail: FC = () => {
  return (
    <div className="absolute left-5 bottom-5 w-3/4 h-1/5 flex flex-row">
      <div className="h-full w-full bg-primary-foreground flex flex-col px-5 justify-center">
        <span className="flex flex-row items-center gap-3 text-paragraph-desc">
          <p>01</p>
          <hr className="w-1/8" />
          <p>Category</p>
        </span>
        <h4 className="text-[28px]">Title</h4>
      </div>
      <div className="bg-primary w-1/4 h-1/2 self-end">
        <div className="flex items-center justify-center h-full w-full">
          <BsArrowRight className="text-primary-foreground" size={20} />
        </div>
      </div>
    </div>
  );
}

export default ProductFirstItemDetail;