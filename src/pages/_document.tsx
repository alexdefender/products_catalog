import { JSX } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

import { getStaticAssetPath } from '@utils';

const MyDocument = (): JSX.Element => (
  <Html lang="en">
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href={getStaticAssetPath('reset.css', 'css')} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
