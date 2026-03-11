import { FC } from "react";
import { TextField } from '@/components/common';

const ContactForm: FC = () => {
  return (
    <form action="" className="flex flex-col gap-5">
      <TextField label="Your name" name="name" placeholder="Abc"/>
      <TextField type="email" label="Email address" name="email" placeholder="Abc@def.com"/>
      <TextField label="Subject" name="subject" placeholder="This is an optional"/>
      <TextField label="Message" name="message" placeholder="Hi! I'd like to ask about" multi/>
    </form>
  );
}

export default ContactForm;