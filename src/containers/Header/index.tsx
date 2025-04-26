import { FC, JSX } from 'react';

import { HEADER_MENU } from '@constants';
import { Header } from '@components';
import ThemeModeToggle from './ThemeModeToggle';

const HeaderContainer: FC = (): JSX.Element => {
  return <Header menu={HEADER_MENU} renderThemeToggle={<ThemeModeToggle />} />;
};

export default HeaderContainer;
