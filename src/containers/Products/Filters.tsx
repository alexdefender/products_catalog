import { FC, JSX } from 'react';
import Stack from '@mui/material/Stack';

import CategoriesFilter from './CategoriesFilter';

const ProductsFiltersContainer: FC = (): JSX.Element => {
  return (
    <Stack gap={2} flexDirection="column" minWidth={250}>
      <CategoriesFilter />
    </Stack>
  );
};

export default ProductsFiltersContainer;
