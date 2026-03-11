import { FC } from "react";

const ContactPage: FC<PageProps<'/contact'>> = () => {
  return (
    <main className="p-20 flex flex-col gap-10">
      <section className="flex flex-col items-center justify-center gap-1">
        <h3 className="text-[36px] font-semibold">Get In Touch With Us</h3>
        <p className="text-contact-highlight w-1/3 text-center">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </section>
    </main>
  );
}

export default ContactPage;