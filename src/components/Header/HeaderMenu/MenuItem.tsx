import { FC, JSX, memo } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

import { Menu } from '@models';
import Text from '../../common/text/Text';

export type MenuItemProps = Menu[0];

const HeaderMenuItem: FC<MenuItemProps> = ({ name, href = '' }): JSX.Element => {
  const theme = useTheme();
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <li>
      <Link href={href}>
        <Text
          tid={name}
          fontWeight={isActive ? 700 : 0}
          sx={{
            color: { xs: theme.palette.common.black, md: theme.palette.common.white },
          }}
        />
      </Link>
    </li>
  );
};

export default memo(HeaderMenuItem);
