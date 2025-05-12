import { FC, JSX, useEffect } from 'react';
import { useParams } from 'next/navigation';

import useAppSelector from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';
import { ProductDetails } from '@components';

const ProductDetailsContainer: FC = (): JSX.Element => {
  const { data, isLoading, hasData, error } = useAppSelector((state) => state.product);
  const { getProduct, resetProductState, addBasketItem } = useActions();
  const params = useParams();

  useEffect(() => {
    if (!hasData && params?.id) getProduct(params.id as string);

    return () => {
      if (hasData) resetProductState();
    };
  }, [hasData, params?.id]);

  return (
    <ProductDetails product={data} isLoading={!hasData || isLoading} error={error} onAddToBasket={addBasketItem} />
  );
};

export default ProductDetailsContainer;
