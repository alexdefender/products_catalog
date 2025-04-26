import { FC, JSX } from 'react';

import useTypedSelector from '@hooks/useTypedSelector';
import useActions from '@hooks/useActions';
import { ProductsListViewToggle } from '@components';

const ProductsListViewToggleContainer: FC = (): JSX.Element => {
  const { view } = useTypedSelector((state) => state.products);
  const { setProductsView } = useActions();

  return <ProductsListViewToggle view={view} onToggle={setProductsView} />;
};

export default ProductsListViewToggleContainer;
