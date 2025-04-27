import { FC, JSX, useEffect, useMemo } from 'react';

import useAppSelector from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';
import { getFilteredProductsList, getSortedProductsList } from '@utils/product';
import { ProductsList } from '@components';

const ProductsListContainer: FC = (): JSX.Element => {
  const { list, isLoading, hasData, view, filters, sorting } = useAppSelector((state) => state.products);
  const { getProducts, addBasketItem } = useActions();

  useEffect(() => {
    if (!hasData) getProducts();
  }, [hasData]);

  const correctList = useMemo(() => {
    const filteredList = getFilteredProductsList(list, filters);
    const sortedList = getSortedProductsList(filteredList, sorting);

    return sortedList;
  }, [list, filters, sorting]);

  return (
    <ProductsList list={correctList} view={view} isLoading={!hasData || isLoading} onAddToBasket={addBasketItem} />
  );
};

export default ProductsListContainer;
