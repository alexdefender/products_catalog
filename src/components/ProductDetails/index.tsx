import { FC, JSX } from 'react';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { Product } from '@models/product';
import SafeText from '../common/text/SafeText';
import Text from '../common/text/Text';
import Loader from './Loader';

const ImagWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2, 0),
  width: '100%',
  overflow: 'hidden',
}));

const Image = styled('img')({
  height: 500,
  maxWidth: '100%',
  objectFit: 'contain',
});

type ProductDetailsProps = {
  product: Product;
  isLoading: boolean;
};

const ProductDetails: FC<ProductDetailsProps> = ({ product, isLoading }): JSX.Element => {
  const theme = useTheme();

  if (isLoading) {
    return <Loader />;
  }

  const { title, price, description, category, image, rating } = product;

  return (
    <Stack gap={1} flexDirection="column" maxWidth={800} mx="auto">
      <SafeText content={title} component="h1" variant="h2" />
      <Stack gap={2} justifyContent="space-between">
        <Text
          tid="CATEGORY_VALUE"
          values={{ value: category }}
          component="p"
          color={theme.palette.grey[500]}
          fontWeight={600}
        />
        <Text tid="RATING_VALUE" values={{ value: rating.rate }} component="p" />
      </Stack>
      <Text
        tid="PRICE_VALUE"
        values={{ value: price }}
        component="p"
        variant="h3"
        fontWeight={700}
        color={theme.palette.success.main}
      />
      <ImagWrap>
        <Image src={image} alt="" />
      </ImagWrap>
      <SafeText content={description} component="p" />
    </Stack>
  );
};

export default ProductDetails;
