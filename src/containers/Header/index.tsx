import { FC, JSX } from 'react';

import { HEADER_MENU } from '@constants';
import { Header } from '@components';
import ThemeModeToggle from './ThemeModeToggle';
import BasketButton from '../Basket/BasketButton';

const HeaderContainer: FC = (): JSX.Element => {
  return <Header menu={HEADER_MENU} renderThemeToggle={<ThemeModeToggle />} renderBasket={<BasketButton />} />;
};

export default HeaderContainer;
