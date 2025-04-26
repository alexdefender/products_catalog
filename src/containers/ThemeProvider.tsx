import { ReactNode, FC, JSX } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import getAppTheme from '@theme/getAppTheme';
import useAppSelector from '@hooks/useTypedSelector';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }): JSX.Element => {
  const { mode } = useAppSelector((state) => state.layout);
  const theme = createTheme(getAppTheme(mode));

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
