import { FC, JSX, MouseEvent } from 'react';

import useAppSelector from '@hooks/useAppSelector';
import useActions from '@hooks/useActions';
import { IconButton } from '@components';

const ThemeModeToggleContainer: FC = (): JSX.Element => {
  const { mode } = useAppSelector((state) => state.layout);
  const { setLayoutMode } = useActions();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setLayoutMode(mode === 'light' ? 'dark' : 'light');
  };

  return <IconButton icon={mode === 'dark' ? 'lightMode' : 'darkMode'} onClick={handleClick} />;
};

export default ThemeModeToggleContainer;
