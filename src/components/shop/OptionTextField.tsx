import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  label: string;
  id: string;
  placeholder?: string;
  inputClassName?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  value?: string | number;
}

const OptionTextField: FC<Props> = ({ id, label, type, placeholder, inputClassName, value, onChange }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <label htmlFor={id} className="capitalize">{label}</label>
      <input
        className={twMerge("bg-primary-foreground text-center h-13.75 w-13.75", inputClassName)}
        type={type ?? 'text'}
        name={id}
        id={id}
        placeholder={placeholder} 
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default OptionTextField;