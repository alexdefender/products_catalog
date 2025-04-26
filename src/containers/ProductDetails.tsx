import { FC, JSX, useEffect } from 'react';
import { useParams } from 'next/navigation';

import useTypedSelector from '@hooks/useTypedSelector';
import useActions from '@hooks/useActions';
import { ProductDetails } from '@components';

const ProductDetailsContainer: FC = (): JSX.Element => {
  const { data, isLoading, hasData } = useTypedSelector((state) => state.product);
  const { getProduct, resetProductState } = useActions();
  const params = useParams();

  useEffect(() => {
    if (!hasData && params?.id) getProduct(params.id as string);

    return () => {
      if (hasData) resetProductState();
    };
  }, [hasData, params?.id]);

  return <ProductDetails product={data} isLoading={!hasData || isLoading} />;
};

export default ProductDetailsContainer;
