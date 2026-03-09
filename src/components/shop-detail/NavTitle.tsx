import { FC } from "react";
import { ArrowRight } from "../common/icons";

const NavTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <h5 className="font-normal text-shop-detail-nav-title">{title}</h5>
      <ArrowRight size={20} />
    </div>
  );
}

export default NavTitle;