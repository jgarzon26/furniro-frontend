import { FC } from "react";
import navs from "@/common/navs";
import Link from "next/link";

type Props = {
  className?: string;
};

const HeaderNav: FC<Props> = ({className}) => {
  return (
    <nav className={`list-none *:px-10 ${className}`}>
      {
        navs.map(({link, title}) => (
          <li key={link}>
            <Link href={link}>{title}</Link>
          </li>
        ))
      }
    </nav>
  );
};

export default HeaderNav;