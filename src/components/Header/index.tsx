import { FC, JSX } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Menu } from '@models';

import HeaderMenu from './HeaderMenu';
import HeaderMobileMenu from './HeaderMenu/MobileMenu';

type HeaderProps = {
  menu: Menu;
};

const Header: FC<HeaderProps> = ({ menu }): JSX.Element => (
  <AppBar>
    <Toolbar>
      <HeaderMenu menu={menu} />
      <HeaderMobileMenu menu={menu} />
    </Toolbar>
  </AppBar>
);

export default Header;
