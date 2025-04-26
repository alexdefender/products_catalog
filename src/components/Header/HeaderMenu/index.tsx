import { FC, JSX } from 'react';
import { styled } from '@mui/material/styles';

import { Menu } from '@models';
import MenuItem from './MenuItem';

const Navigation = styled('nav')(({ theme }) => ({
  display: 'flex',
  flex: 1,

  [theme.breakpoints.down('md')]: {
    visibility: 'hidden',
    overflow: 'auto',
  },
}));

const StyledList = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export type HeaderMenuProps = {
  menu: Menu;
};

const HeaderMenu: FC<HeaderMenuProps> = ({ menu }): JSX.Element => (
  <Navigation>
    <StyledList>
      {menu?.map((item, index) => (
        <MenuItem key={`${item.name}-${index}`} {...item} />
      ))}
    </StyledList>
  </Navigation>
);

export default HeaderMenu;
