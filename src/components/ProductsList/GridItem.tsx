import { FC, JSX, MouseEvent, memo } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { Product } from '@models/product';
import SafeText from '../common/text/SafeText';
import Text from '../common/text/Text';

const ImagWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  overflow: 'hidden',
  minHeight: 250,
  maxHeight: 250,
});

const Image = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
});

export type ProductItemProps = {
  onClick: (e: MouseEvent<HTMLElement>) => void;
} & Product;

const GridProductItem: FC<ProductItemProps> = ({ image, title, price, rating, onClick }): JSX.Element => (
  <Card
    sx={{ display: 'flex', flexDirection: 'column', maxWidth: 250, width: '100%', cursor: 'pointer' }}
    onClick={onClick}
  >
    <ImagWrap>
      <Image src={image} alt="" />
    </ImagWrap>
    <Stack gap={1} flexDirection="column" p={2} flex={1}>
      <SafeText content={title} component="p" variant="h6" flex={1} />
      <Text tid="PRICE_VALUE" values={{ value: price }} component="p" variant="h6" />
      <Text tid="RATING_VALUE" values={{ value: rating.rate }} component="p" />
    </Stack>
  </Card>
);

export default memo(GridProductItem);
