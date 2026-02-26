import navs from "@/common/navs";

const Links = () => {
  return (
    <div>
      <h6>Links</h6>
      <nav>
        {
          navs.map((nav, index) => (<li key={index}>{nav.title}</li>))
        }
      </nav>
    </div>
  );
}

export default Links;