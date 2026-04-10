import { FC } from "react";
import { IconButton } from "@/components/common";
import { CartOff } from "@/components/common/icons";
import Actions from "./Actions";
import { useSuspenseQuery } from "@apollo/client/react";
import { GET_USER_CART } from "@/lib/documents/users";
import DetailList from "./DetailList";
import { CombinedGraphQLErrors } from "@apollo/client";

type Props = {
  onClose?: () => void;
};

const CartModal: FC<Props> = ({ onClose }) => {
  const { data, error } = useSuspenseQuery(GET_USER_CART, {
    fetchPolicy: "cache-and-network",
    errorPolicy: 'all',
    queryKey: ['cart'],
  });

  let errorMessage = error?.message;

  if(CombinedGraphQLErrors.is(error)) {
    errorMessage = error.errors[0].extensions?.code === 'UNAUTHENTICATED' ? 'Login to use Cart' : error.errors[0].message;
  }

  return (
    <>
      <div className="flex flex-row justify-between items-center h-1/12">
        <h4>Shopping Cart</h4>
        <IconButton icon={CartOff} size={16} color="var(--footer-highlight)" onClick={onClose} />
      </div>
      <hr className="w-3/4 border-cart-modal-divider" />
        {
          data && <DetailList cart={data.user.cart} />
        }
        {
          error && <p>{errorMessage}</p>
        }
      <hr />
      {data && <Actions onClose={onClose}/>}
    </>
  );
}

export default CartModal;