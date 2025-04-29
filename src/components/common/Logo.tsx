import { FC, JSX } from 'react';
import Link from '@mui/material/Link';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useTheme } from '@mui/material/styles';

import { redirect } from '@utils/navigation';
import ROUTES from '@constants/routes';

import Text from './text/Text';

const Logo: FC = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Link
      href={ROUTES.PRODUCTS}
      onClick={(e) => {
        e.preventDefault();
        redirect(ROUTES.PRODUCTS);
      }}
      sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        color: theme.palette.common.white ,
        '&::before': { opacity: 0 },
      }}
    >
      <ListAltIcon fontSize="large" />
      <Text tid="APP_NAME" variant="h5" fontWeight={700} />
    </Link>
  );
};

export default Logo;
