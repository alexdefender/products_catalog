import { FC, JSX } from 'react';

import useAppSelector from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';
import { SortingItem } from '@models/product';
import { SORTING_ITEMS } from '@constants';
import { Select } from '@components';

const SortingProductsContainer: FC = (): JSX.Element => {
  const { sorting } = useAppSelector((state) => state.products);
  const { setSortingProducts } = useActions();

  return (
    <Select
      value={sorting}
      items={SORTING_ITEMS}
      onChange={(value) => {
        setSortingProducts(value as SortingItem);
      }}
    />
  );
};

export default SortingProductsContainer;
