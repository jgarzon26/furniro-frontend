import { CompanyDetail, HelpList, Links, NewsletterForm } from ".";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-10 border-t border-black/17 px-20 pt-10 h-120">
      <section
        className="
          flex flex-1 flex-row items-start justify-between pr-20
          *:flex *:flex-col *:h-full *:gap-10
          [&_nav]:list-none [&_nav]:flex [&_nav]:flex-1 [&_nav]:flex-col [&_nav]:justify-between
          [&_h6]:text-footer-highlight
          [&_li]:font-semibold
        "
      >
        <CompanyDetail />
        <Links />
        <HelpList />
        <NewsletterForm />
      </section>
      <section className="border-t border-black/17 pt-5">
        <h6>{currentYear} furino. All rights reverved</h6>
      </section>
    </footer>
  );
}

export default Footer;