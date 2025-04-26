import { FC, JSX, Fragment } from 'react';
import Stack from '@mui/material/Stack';

import useActions from '@hooks/useActions';
import { DIALOGS } from '@constants/index';
import { IconButton, Text } from '@components';
import CategoriesFilter from './CategoriesFilter';
import PricesFilter from './PricesFilter';

type ProductsFiltersContainerProps = {
  variant: 'list' | 'dialog';
};

const ProductsFiltersContainer: FC<ProductsFiltersContainerProps> = ({ variant }): JSX.Element => {
  const { openDialog } = useActions();

  switch (variant) {
    case 'list':
      return (
        <Stack gap={2} flexDirection="column" minWidth={250} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Text tid="FILTER_BY" component="h5" variant="h5" />
          <CategoriesFilter />
          <PricesFilter />
        </Stack>
      );

    case 'dialog':
      return (
        <IconButton
          icon="filter"
          size="large"
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={(e) => {
            e.stopPropagation();
            openDialog({ name: DIALOGS.PRODUCTS_FILTERS });
          }}
        />
      );

    default:
      return <Fragment />;
  }
};

export default ProductsFiltersContainer;
