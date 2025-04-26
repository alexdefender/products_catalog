import { FC, JSX } from 'react';

import { HEADER_MENU } from '@constants';
import { Header } from '@components';

const HeaderContainer: FC = (): JSX.Element => {
  return <Header menu={HEADER_MENU} />;
};

export default HeaderContainer;
