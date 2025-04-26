import { PaletteMode } from '@mui/material/styles';
import { Products, ProductsView } from './product';

export type LayoutState = {
  mode: PaletteMode;
};

export type ProductsState = {
  list: Products;
  isLoading: boolean;
  hasData: boolean;
  error: string;
  view: ProductsView;
};
