import { JSX } from 'react';
import { Page, BaseLayout } from '@layouts';
import { META_ID } from '@constants';
import Checkout from '@containers/Checkout';

import Head from '../_head';

const CheckoutPage = (): JSX.Element => (
  <Page>
    <Head id={META_ID.CHECKOUT} />
    <BaseLayout>
      <Checkout />
    </BaseLayout>
  </Page>
);

export default CheckoutPage;
