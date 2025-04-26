import { FC, JSX } from 'react';
import Stack from '@mui/material/Stack';

import ProductsList from './ProductsList';
import ViewToggle from './ViewToggle';

const ProductsContainer: FC = (): JSX.Element => {
  return (
    <Stack gap={2} flexDirection="column">
      <Stack gap={2} justifyContent="flex-end">
        <ViewToggle />
      </Stack>

      <ProductsList />
    </Stack>
  );
};

export default ProductsContainer;
