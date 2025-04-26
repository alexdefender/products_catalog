import { ReactNode, FC, Fragment, JSX } from 'react';
import Container from '@mui/material/Container';

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }): JSX.Element => (
  <Fragment>
    <Container>{children}</Container>
  </Fragment>
);

export default BaseLayout;
