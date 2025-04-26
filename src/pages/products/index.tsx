import { JSX } from 'react';
import { Page, BaseLayout } from '@layouts';
import { META_ID } from '@constants';
import Products from '@containers/Products';

import Head from '../_head';

const ProductsPage = (): JSX.Element => (
  <Page>
    <Head id={META_ID.PRODUCTS} />
    <BaseLayout>
      <Products />
    </BaseLayout>
  </Page>
);

export default ProductsPage;
