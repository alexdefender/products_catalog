import { Page, BaseLayout } from '@layouts';
import { META_ID } from '@constants';

import Head from './_head';
import { JSX } from 'react';

// before use, remove redirect from next.config.ts
const HomePage = (): JSX.Element => (
  <Page>
    <Head id={META_ID.HOME} />
    <BaseLayout>Home page</BaseLayout>
  </Page>
);

export default HomePage;
