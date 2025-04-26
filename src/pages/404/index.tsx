import { JSX } from 'react';

import { Page } from '@layouts';
import { META_ID } from '@constants';
import { NotFound } from '@components';
import Head from '../_head';

const NotFoundPage = (): JSX.Element => (
  <Page>
    <Head id={META_ID.NOT_FOUND} />
    <NotFound />
  </Page>
);

export default NotFoundPage;
