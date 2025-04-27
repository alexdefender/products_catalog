import { PaletteMode } from '@mui/material/styles';
import { Product, ProductFilters, Products, ProductsView, SortingItem } from './product';
import { BasketItem } from './basket';

export type LayoutState = {
  mode: PaletteMode;
};

export type ProductsState = {
  list: Products;
  isLoading: boolean;
  hasData: boolean;
  error: string;
  view: ProductsView;
  filters: ProductFilters;
  sorting: SortingItem;
};

export type ProductState = {
  data: Product;
  isLoading: boolean;
  hasData: boolean;
  error: string;
};

export type DialogState = {
  isOpen: boolean;
  data: object;
};

export type DialogsState = {
  [keys: string]: DialogState;
};

export type BasketState = {
  items: BasketItem[];
};
