import { FC } from 'react';
import { IconButton } from '../common';
import { Heart, Search } from '../common/icons';
import ModalButton from './cart-modal/ModalButton';
import AccountButton from './AccountButton';

type Props = {
  className?: string;
};

const HeaderActions: FC<Props> = ({ className }) => {
  return (
    <ul className={`*:px-5 ${className ?? ''}`}>
      <li>
        <AccountButton />
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