import { FC } from "react";

type Props = {
  className?: string;
};

const HeaderNav: FC<Props> = ({className}) => {
  return (
    <nav className={`list-none *:px-10 ${className}`}>
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
  );
};

export default HeaderNav;