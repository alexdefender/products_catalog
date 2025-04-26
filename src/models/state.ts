import { PaletteMode } from '@mui/material/styles';
import { Product, Products, ProductsView } from './product';

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

export type ProductState = {
  data: Product;
  isLoading: boolean;
  hasData: boolean;
  error: string;
};
