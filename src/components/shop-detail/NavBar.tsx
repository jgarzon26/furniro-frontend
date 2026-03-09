import { FC } from "react";
import NavTitle from "./NavTitle";

const NavBar: FC<{ slug: string }> = ({ slug }) => {
  return (
    <nav className="flex flex-row bg-shop-detail-nav h-25 px-20">
      <section className="flex flex-row justify-between items-center *:mx-5">
        <NavTitle title="Home" />
        <NavTitle title="Shop" />
        <h5 className="border-l border-l-shop-detail-divider px-10 font-normal h-1/3 flex justify-center items-center capitalize">
          {slug}
        </h5>
      </section>
    </nav>
  );
}

export default NavBar;