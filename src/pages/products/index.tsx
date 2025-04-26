import { Page, BaseLayout } from '@layouts';
import { META_ID } from '@constants';

import Head from '../_head';
import { JSX } from 'react';

const ProductsPage = (): JSX.Element => (
  <Page>
    <Head id={META_ID.PRODUCTS} />
    <BaseLayout>Products list</BaseLayout>
  </Page>
);

export default ProductsPage;
