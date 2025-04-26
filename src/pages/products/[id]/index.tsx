import { JSX } from 'react';
import { Page, BaseLayout } from '@layouts';
import { META_ID } from '@constants';
import ProductDetails from '@containers/ProductDetails';

import Head from '../../_head';

const ProductDetailsPage = (): JSX.Element => (
  <Page>
    <Head id={META_ID.PRODUCT_DETAILS} />
    <BaseLayout>
      <ProductDetails />
    </BaseLayout>
  </Page>
);

export default ProductDetailsPage;
