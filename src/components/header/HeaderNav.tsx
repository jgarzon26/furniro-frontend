import { FC } from "react";
import navs from "@/common/navs";
import Link from "next/link";
import { headers } from "next/headers";

type Props = {
  className?: string;
};

const HeaderNav: FC<Props> = async ({className}) => {
  const headersList = await headers();
  const pathname = headersList.get('x-current-path');

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