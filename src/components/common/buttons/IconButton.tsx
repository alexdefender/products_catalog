import { FC, JSX } from 'react';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Close from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const Icons = {
  filter: FilterAltIcon,
  close: Close,
  grid: ViewModuleIcon,
  list: ListIcon,
  darkMode: DarkModeIcon,
  lightMode: LightModeIcon,
} as const;

type IconButtonProps = {
  icon: keyof typeof Icons;
  size?: 'small' | 'medium' | 'large';
  color?: string;
} & ButtonBaseProps;

const IconButton: FC<IconButtonProps> = ({ size = 'medium', icon, color, ...props }): JSX.Element => {
  const Icon = Icons[icon];

  return (
    <ButtonBase {...props}>
      <Icon fontSize={size} htmlColor={color} />
    </ButtonBase>
  );
};

export default IconButton;
