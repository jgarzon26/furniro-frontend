import { FC } from 'react';
import { IconButton } from '../common';
import { Account, Heart, Search } from '../common/icons';
import ModalButton from './cart-modal/ModalButton';

type Props = {
  className?: string;
};

const HeaderActions: FC<Props> = ({ className }) => {

  return (
    <ul className={`*:px-5 ${className ?? ''}`}>
      <li>
        <IconButton icon={Account} />
      </li>
      <li>
        <IconButton icon={Search} />
      </li>
      <li>
        <IconButton icon={Heart} />
      </li>
      <li>
        <ModalButton />
      </li>
    </ul>
  );
}

export default HeaderActions;