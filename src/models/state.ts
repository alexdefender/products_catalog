import { PaletteMode } from '@mui/material/styles';
import { CheckBoxesGroupProps} from '@components';
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
  filters: {
    categories: CheckBoxesGroupProps['items'];
    prices: [];
  };
};

export type ProductState = {
  data: Product;
  isLoading: boolean;
  hasData: boolean;
  error: string;
};
