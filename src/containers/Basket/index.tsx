import { FC, JSX } from 'react';

import useAppSelector from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';
import { Basket } from '@components';

const BasketContainer: FC = (): JSX.Element => {
  const { items } = useAppSelector((state) => state.basket);
  const { updateAmountBasketItem, deleteBasketItem, resetBasketState } = useActions();

  return (
    <Basket
      items={items}
      ItemActionsProps={{
        onChangeAmount: (id, amount) => updateAmountBasketItem({ id, amount }),
        onDelete: (id) => deleteBasketItem({ id }),
      }}
      onDeleteAll={resetBasketState}
    />
  );
};

export default BasketContainer;
