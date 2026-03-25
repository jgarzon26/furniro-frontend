import { FC } from "react";
import NavTitle from "./NavTitle";
import NavSlug from "./NavSlug";

const NavBar: FC = () => {
  return (
    <nav className="flex flex-row bg-shop-detail-nav h-25 px-20">
      <section className="flex flex-row justify-between items-center *:mx-5">
        <NavTitle title="Home" />
        <NavTitle title="Shop" />
        <NavSlug />
      </section>
    </nav>
  );
}

export default NavBar;