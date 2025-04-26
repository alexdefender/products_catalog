import { FC, JSX, memo } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import SafeText from '../common/text/SafeText';
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

const ProductListItem: FC<ProductItemProps> = ({ image, title, price, onClick }): JSX.Element => (
  <Card sx={{ display: 'flex', width: '100%', cursor: 'pointer', height: 100 }} onClick={onClick}>
    <ImagWrap>
      <Image src={image} alt="" />
    </ImagWrap>
    <Stack gap={1} p={2} flex={1}>
      <SafeText content={title} component="p" variant="h6" flex={1} />
      <SafeText content={`Price: ${price}`} component="p" variant="h6" />
    </Stack>
  </Card>
);

export default memo(ProductListItem);
