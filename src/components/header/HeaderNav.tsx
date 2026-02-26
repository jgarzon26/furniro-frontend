import { FC } from "react";
import navs from "@/common/navs";

type Props = {
  className?: string;
};

const HeaderNav: FC<Props> = ({className}) => {
  return (
    <nav className={`list-none *:px-10 ${className}`}>
      {
        navs.map((nav, index) => (<li key={index}>{nav.title}</li>))
      }
    </nav>
  );
};

export default HeaderNav;