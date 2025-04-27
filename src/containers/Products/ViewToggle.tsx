import { FC, JSX, MouseEvent } from 'react';

import useAppSelector from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';
import { IconButton } from '@components';

const ProductsListViewToggleContainer: FC = (): JSX.Element => {
  const { view } = useAppSelector((state) => state.products);
  const { setProductsView } = useActions();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setProductsView(view === 'grid' ? 'list' : 'grid');
  };

  return <IconButton icon={view} size="large" onClick={handleClick} />;
};

export default ProductsListViewToggleContainer;
