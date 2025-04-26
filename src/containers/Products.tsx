import { FC, JSX, useEffect } from 'react';

import useTypedSelector from '@hooks/useTypedSelector';
import useActions from '@hooks/useActions';
import { ProductsList } from '@components';

const ProductsContainer: FC = (): JSX.Element => {
  const { list, isLoading, hasData, view } = useTypedSelector((state) => state.products);
  const { getProducts } = useActions();

  useEffect(() => {
    if (!hasData) getProducts();
  }, []);

  return <ProductsList list={list} view={view} isLoading={isLoading} />;
};

export default ProductsContainer;
