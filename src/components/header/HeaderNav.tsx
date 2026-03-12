'use client';

import { FC } from "react";
import navs from "@/common/navs";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
};

const HeaderNav: FC<Props> = ({className}) => {
  const pathname = usePathname();

  return (
    <nav className={`list-none *:px-10 ${className}`}>
      {
        navs.map(({link, title}) => (
          <li key={link}>
            <Link href={link} className={`${pathname === link ? 'font-semibold' : ''} hover:underline`}>{title}</Link>
          </li>
        ))
      }
    </nav>
  );
};

export default HeaderNav;