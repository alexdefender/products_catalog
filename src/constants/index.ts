import { Menu } from '@models/index';
import ROUTES from './routes';

export const MAIN_CONTENT_ID = 'main-content';

export const META_ID = {
  HOME: 'HOME',
  PRODUCTS: 'PRODUCTS',
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
