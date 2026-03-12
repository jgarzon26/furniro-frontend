import navs from "@/common/navs";
import Link from "next/link";

const Links = () => {
  return (
    <div>
      <h6>Links</h6>
      <nav>
        {
          navs.map(({link, title}) => (
            <li key={link}>
              <Link href={link}>{title}</Link>
            </li>
          ))
        }
      </nav>
    </div>
  );
}

export default Links;