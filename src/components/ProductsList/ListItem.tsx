import { FC, JSX, memo } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import SafeText from '../common/text/SafeText';
import Text from '../common/text/Text';
import BasketButton from '../common/buttons/BasketButton';
import { ProductItemProps } from './GridItem';

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

const ProductListItem: FC<ProductItemProps> = ({ product, onClick, onAddToBasket }): JSX.Element => {
  const { image, title, price, rating } = product;

  return (
    <Card sx={{ display: 'flex', width: '100%', cursor: 'pointer' }} onClick={onClick}>
      <ImagWrap>
        <Image src={image} alt="" />
      </ImagWrap>
      <Stack gap={1} p={2} flex={1}>
        <Box flex={1}>
          <SafeText content={title} component="p" variant="h6" />
          <Text tid="RATING_VALUE" values={{ value: rating.rate }} component="p" />
        </Box>
        <Stack gap={1} flexDirection="column" alignItems="end">
          <Text tid="PRICE_VALUE" values={{ value: price }} component="p" variant="h6" />
          <BasketButton onClick={() => onAddToBasket(product)} />
        </Stack>
      </Stack>
    </Card>
  );
};

export default memo(ProductListItem);
