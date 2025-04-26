import { FC, JSX } from 'react';
import Stack from '@mui/material/Stack';

import ProductsList from './ProductsList';
import ViewToggle from './ViewToggle';
import Filters from './Filters';

const ProductsContainer: FC = (): JSX.Element => {
  return (
    <Stack gap={2}>
      <Filters variant="list" />

      <Stack gap={2} flexDirection="column">
        <Stack gap={2} justifyContent="flex-end">
          <Filters variant="dialog" />
          <ViewToggle />
        </Stack>

        <ProductsList />
      </Stack>
    </Stack>
  );
};

export default ProductsContainer;
