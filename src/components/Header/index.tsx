import { FC, JSX, ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Menu } from '@models';

import HeaderMenu from './HeaderMenu';
import HeaderMobileMenu from './HeaderMenu/MobileMenu';

type HeaderProps = {
  menu: Menu;
  renderThemeToggle: ReactNode;
};

const Header: FC<HeaderProps> = ({ menu, renderThemeToggle }): JSX.Element => (
  <AppBar>
    <Toolbar>
      <HeaderMenu menu={menu} />
      {renderThemeToggle}
      <HeaderMobileMenu menu={menu} />
    </Toolbar>
  </AppBar>
);

export default Header;
