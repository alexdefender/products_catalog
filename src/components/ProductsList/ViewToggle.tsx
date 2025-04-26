import { FC, JSX, useMemo, MouseEvent } from 'react';

import { ProductsView } from '@models/product';
import GridButton from '../common/buttons/GridButton';
import ListButton from '../common/buttons/ListButton';

type ProductsListViewToggleProps = {
  view: ProductsView;
  onToggle: (view: ProductsView) => void;
};

const ProductsListViewToggle: FC<ProductsListViewToggleProps> = ({ view, onToggle }): JSX.Element => {
  const Component = useMemo(() => (view === 'list' ? GridButton : ListButton), [view]);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle(view === 'grid' ? 'list' : 'grid');
  };

  return <Component onClick={handleClick} />;
};

export default ProductsListViewToggle;
