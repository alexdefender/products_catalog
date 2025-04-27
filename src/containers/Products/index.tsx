import { FC, JSX } from 'react';
import Stack from '@mui/material/Stack';

import ProductsList from './ProductsList';
import ViewToggle from './ViewToggle';
import Filters from './Filters';
import Sorting from './Sorting';

const ProductsContainer: FC = (): JSX.Element => {
  return (
    <Stack gap={5}>
      <Filters variant="list" />

      <Stack gap={2} flexDirection="column" width="100%">
        <Stack gap={2} justifyContent="flex-end">
          <Sorting />
          <Filters variant="dialog" />
          <ViewToggle />
        </Stack>

        <ProductsList />
      </Stack>
    </Stack>
  );
};

export default ProductsContainer;
