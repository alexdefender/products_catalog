import React, { JSX } from 'react';
import { AppProps } from 'next/app';

import '@services/i18n';
import StoreProvider from '@containers/StoreProvider';
import ThemeProvider from '@containers/ThemeProvider';

type MyAppProps = {
  pageProps: object;
} & AppProps;

const MyApp = ({ Component, pageProps }: MyAppProps): JSX.Element => (
  <StoreProvider>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </StoreProvider>
);

export default MyApp;
