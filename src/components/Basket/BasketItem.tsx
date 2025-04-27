import { FC, JSX, memo } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { BasketItem as BasketItemType } from '@models/basket';
import SafeText from '../common/text/SafeText';
import Text from '../common/text/Text';
import IconButton from '../common/buttons/IconButton';
import AmountControl from '../controls/AmountControl';

const ImagWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  overflow: 'hidden',
  minHeight: 100,
  maxHeight: 100,
});

const Image = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
});

export type BasketItemProps = {
  onChangeAmount: (id: string, amount: number) => void;
  onDelete: (id: string) => void;
} & BasketItemType;

const BasketItem: FC<BasketItemProps> = ({
  id,
  image,
  title,
  price,
  amount,
  onChangeAmount,
  onDelete,
}): JSX.Element => (
  <Card sx={{ p: 1 }}>
    <Stack gap={2} alignItems="start">
      <ImagWrap>
        <Image src={image} alt="" />
      </ImagWrap>
      <SafeText content={title} component="p" variant="h6" flex={1} />
      <IconButton
        icon="delete"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
      />
    </Stack>
    <Stack justifyContent="end" gap={2} alignItems="center">
      <Text tid="PRICE_VALUE" values={{ value: price }} component="p" variant="h6" />
      <AmountControl value={amount} onChange={(val) => onChangeAmount(id, val)} />
    </Stack>
  </Card>
);

export default memo(BasketItem);
