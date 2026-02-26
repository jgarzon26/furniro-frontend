import { FC } from 'react';
import { IconButton } from '../common';
import { Account, Heart, Search, ShoppingCart } from '../common/icons';

type Props = {
  className?: string;
};

const HeaderActions: FC<Props> = ({className}) => {

  return (
    <ul className={`justify-between ${className ?? ''}`}>
      <li>
        <IconButton icon={Account}/>
      </li>
      <li>
        <IconButton icon={Search}/>
      </li>
      <li>
        <IconButton icon={Heart}/>
      </li>
      <li>
        <IconButton icon={ShoppingCart}/>
      </li>
    </ul>
  );
}

export default HeaderActions;