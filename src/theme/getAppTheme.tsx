import { ThemeOptions, PaletteMode } from '@mui/material/styles';
import { getDesignTokens } from './themePrimitives';
import componentsCustomizations from './customizations';

export default function getAppTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: componentsCustomizations,
  };
}
