import { Page, BaseLayout } from '@layouts';
import { META_ID } from '@constants';

import Head from './_head';
import { JSX } from 'react';

const HomePage = (): JSX.Element => (
  <Page>
    <Head id={META_ID.PRODUCTS_LIST} />
    <BaseLayout>Products list</BaseLayout>
  </Page>
);

export default HomePage;
