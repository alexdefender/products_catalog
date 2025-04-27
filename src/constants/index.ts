import { Menu } from '@models/index';
import { SortingItem } from '@models/product';
import ROUTES from './routes';

export const MAIN_CONTENT_ID = 'main-content';

export const META_ID = {
  HOME: 'HOME',
  PRODUCTS: 'PRODUCTS',
  PRODUCT_DETAILS: 'PRODUCT_DETAILS',
  CHECKOUT: 'CHECKOUT',
  NOT_FOUND: 'NOT_FOUND',
};

export const MENU_ITEMS = {
  PRODUCTS: 'PRODUCTS',
};

export const HEADER_MENU: Menu = [
  {
    name: MENU_ITEMS.PRODUCTS,
    href: ROUTES.PRODUCTS,
  },
];

export const DIALOGS = {
  PRODUCTS_FILTERS: 'ProductsFiltersDialog',
  BASKET: 'BasketDialog',
} as const;

export const SORTING_ITEMS: Array<SortingItem> = [
  {
    value: 'default',
    name: 'DEFAULT',
  },
  {
    value: 'price_asc',
    name: 'PRICE_ASC',
  },
  {
    value: 'price_desc',
    name: 'PRICE_DESC',
  },
  {
    value: 'name_asc',
    name: 'NAME_ASC',
  },
  {
    value: 'name_desc',
    name: 'NAME_DESC',
  },
  {
    value: 'rate_asc',
    name: 'RATING_ASC',
  },
  {
    value: 'rate_desc',
    name: 'RATING_DESC',
  },
];
