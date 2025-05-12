import { FC, JSX, useMemo, useCallback, MouseEvent } from 'react';
import Stack, { StackProps } from '@mui/material/Stack';

import { Products, ProductsView } from '@models/product';
import { redirect } from '@utils/navigation';
import ROUTES from '@constants/routes';
import GridItem, { ProductItemProps } from './GridItem';
import ListItem from './ListItem';
import Loader from './Loader';
import Text from '../common/text/Text';
import ErrorMessage from '../common/text/ErrorMessage';

type ProductsListProps = {
  list: Products;
  view: ProductsView;
  isLoading: boolean;
  error: string;
} & Pick<ProductItemProps, 'onAddToBasket'>;

const ProductsList: FC<ProductsListProps> = ({ list = [], view, isLoading, error, onAddToBasket }): JSX.Element => {
  const isEmpty = list.length === 0;
  const ItemComponent = useMemo(() => (view === 'list' ? ListItem : GridItem), [view]);

  const wrapProps: StackProps = useMemo(() => {
    if (view === 'list') {
      return { flexDirection: 'column' };
    }

    return { flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } };
  }, [view]);

  const handleClick = useCallback(
    (id: string) => (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      redirect(ROUTES.PRODUCT_DETAILS(id));
    },
    [],
  );

  if (error) {
    return <ErrorMessage textAlign="center" my={5} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Stack gap={2} {...wrapProps}>
      {list.map((item) => (
        <ItemComponent key={item.id} product={item} onClick={handleClick(item.id)} onAddToBasket={onAddToBasket} />
      ))}
      {isEmpty && <Text tid="EMPTY_PRODUCTS_LIST" component="div" variant="h5" margin="auto" />}
    </Stack>
  );
};

export default ProductsList;
