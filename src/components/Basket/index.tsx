import { FC, Fragment, JSX, useMemo } from 'react';
import Stack from '@mui/material/Stack';

import { BasketItem as BasketItemType } from '@models/basket';
import { getTotalPrice } from '@utils/basket';
import BasketItem, { BasketItemProps } from './BasketItem';
import Text from '../common/text/Text';
import Button from '../common/buttons/Button';

type BasketProps = {
  items: BasketItemType[];
  ItemActionsProps: Pick<BasketItemProps, 'onDelete' | 'onChangeAmount'>;
  onDeleteAll: VoidFunction;
};

const Basket: FC<BasketProps> = ({ items = [], ItemActionsProps, onDeleteAll }): JSX.Element => {
  const isEmpty = items.length === 0;
  const totalPrice = useMemo(() => getTotalPrice(items), [items]);

  return (
    <Stack gap={2} flexDirection="column">
      {items.map((item) => (
        <BasketItem key={item.id} {...item} {...ItemActionsProps} />
      ))}
      {isEmpty && <Text tid="EMPTY_BASKET" component="div" variant="h5" margin="auto" />}
      {!isEmpty && (
        <Fragment>
          <Text
            tid="TOTAL_PRICE_VALUE"
            values={{ value: totalPrice.toFixed(2) }}
            component="div"
            variant="h4"
            textAlign="right"
          />
          <Button
            text="CLEAR_BASKET"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteAll();
            }}
          />
        </Fragment>
      )}
    </Stack>
  );
};

export default Basket;
