import { FC, HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  label: string;
  name: string;
  multi?: boolean;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

const TextField: FC<Props> = ({label, name, multi, type='text', placeholder}) => {
  const textfieldStyle = "border border-contact-highlight rounded-[10px] p-5";
  name = name.toLowerCase();

  return (
    <div className="flex flex-col gap-5">
      <label htmlFor={name} className="font-semibold">{label}</label>
      {
        !multi && 
        <input 
          type={type}
          name={name} 
          id={name} 
          placeholder={placeholder}
          className={textfieldStyle}
        />
      }
      {
        multi && (
          <textarea name={name} id={name} className={twMerge(textfieldStyle, 'h-30')} placeholder={placeholder} maxLength={50}></textarea>
        )
      }
    </div>
  );
}

export default TextField;