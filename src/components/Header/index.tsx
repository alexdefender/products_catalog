import { FC, JSX, ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Menu } from '@models';

import Logo from '../common/Logo';
import HeaderMenu from './HeaderMenu';
import HeaderMobileMenu from './HeaderMenu/MobileMenu';

type HeaderProps = {
  menu: Menu;
  renderThemeToggle: ReactNode;
  renderBasket: ReactNode;
};

const Header: FC<HeaderProps> = ({ menu, renderThemeToggle, renderBasket }): JSX.Element => (
  <AppBar>
    <Toolbar>
      <Logo />
      <HeaderMenu menu={menu} />
      {renderThemeToggle}
      {renderBasket}
      <HeaderMobileMenu menu={menu} />
    </Toolbar>
  </AppBar>
);

export default Header;
