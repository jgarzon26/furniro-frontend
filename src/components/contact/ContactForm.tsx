import { FC } from "react";
import { TextButton, TextField } from '@/components/common';

const ContactForm: FC = () => {
  return (
    <form action="" className="flex flex-col gap-5">
      <TextField label="Your name" name="name" placeholder="Abc"/>
      <TextField type="email" label="Email address" name="email" placeholder="Abc@def.com"/>
      <TextField label="Subject" name="subject" placeholder="This is an optional"/>
      <TextField label="Message" name="message" placeholder="Hi! I'd like to ask about" multi/>
      <TextButton type="submit" className="w-1/3 py-3 mt-5 rounded-[5px]">
        <TextButton.Text className="font-normal">Submit</TextButton.Text>
      </TextButton>
    </form>
  );
}

export default ContactForm;