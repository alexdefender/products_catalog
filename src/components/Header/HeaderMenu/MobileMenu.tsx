import { FC, JSX, useState } from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';

import MenuItem from './MenuItem';
import IconButton from '../../common/buttons/IconButton';
import { HeaderMenuProps } from '.';

const StyledList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const HeaderMobileMenu: FC<HeaderMenuProps> = ({ menu }): JSX.Element => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <ButtonBase aria-label="Menu button" onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="medium" />
      </ButtonBase>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ pt: 2, px: 2, pb: 3, backgroundColor: 'background.default' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mb: 1,
            }}
          >
            <IconButton icon="close" onClick={toggleDrawer(false)} />
          </Box>
          <nav>
            <StyledList>
              {menu?.map((item, index) => (
                <MenuItem key={`${item.name}-${index}`} {...item} />
              ))}
            </StyledList>
          </nav>
        </Box>
      </Drawer>
    </Box>
  );
};

export default HeaderMobileMenu;
