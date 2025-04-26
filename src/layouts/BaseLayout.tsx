import { ReactNode, FC, Fragment, JSX } from 'react';
import Container from '@mui/material/Container';

import Header from '@containers/Header';

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }): JSX.Element => (
  <Fragment>
    <Header />
    <Container>{children}</Container>
  </Fragment>
);

export default BaseLayout;
