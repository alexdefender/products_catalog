import { FC, JSX } from 'react';
import { useTheme } from '@mui/material/styles';
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Close from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

export const Icons = {
  filter: FilterAltIcon,
  close: Close,
  grid: ViewModuleIcon,
  list: ListIcon,
  darkMode: DarkModeIcon,
  lightMode: LightModeIcon,
  add: AddIcon,
  remove: RemoveIcon,
  basket: ShoppingCartIcon,
  delete: DeleteIcon,
} as const;

type IconButtonProps = {
  icon: keyof typeof Icons;
  size?: 'small' | 'medium' | 'large';
  color?: string;
} & ButtonBaseProps;

const IconButton: FC<IconButtonProps> = ({ size = 'medium', icon, color, ...props }): JSX.Element => {
  const theme = useTheme();
  const Icon = Icons[icon];

  return (
    <ButtonBase {...props}>
      <Icon fontSize={size} htmlColor={props.disabled ? theme.palette.grey[300] : color} />
    </ButtonBase>
  );
};

export default IconButton;
