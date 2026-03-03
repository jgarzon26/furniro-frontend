import { FC, PropsWithChildren } from "react";

type Props = {
  active?: boolean;
  onClick?: () => void;
}

const PaginationButton: FC<Props & PropsWithChildren> = ({active, onClick, children}) => {
  const background = active ? 'bg-primary text-primary-foreground' : 'bg-page-button';

  return (
    <button 
      type="button" 
      onClick={onClick} 
      className={
        `
          flex items-center justify-center rounded-[10px] px-5 py-3 ${background} 
          hover:cursor-pointer hover:bg-primary hover:text-primary-foreground duration-300
        `
      }
    >
      {children}
    </button>
  );
}

export default PaginationButton;