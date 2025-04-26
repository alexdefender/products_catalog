import { FC, JSX, useEffect, useMemo } from 'react';

import useTypedSelector from '@hooks/useTypedSelector';
import useActions from '@hooks/useActions';
import { ProductsList } from '@components';

const ProductsListContainer: FC = (): JSX.Element => {
  const { list, isLoading, hasData, view, filters } = useTypedSelector((state) => state.products);
  const { getProducts } = useActions();

  useEffect(() => {
    if (!hasData) getProducts();
  }, [hasData]);

  const correctList = useMemo(() => {
    let res = list;

    if (filters.categories.length) {
      const selectedCategories = filters.categories.map((c) => c.value);
      res = list.filter((item) => selectedCategories.includes(item.category));
    }

    return res;
  }, [list, filters]);

  return <ProductsList list={correctList} view={view} isLoading={!hasData || isLoading} />;
};

export default ProductsListContainer;
