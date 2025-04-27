import { Value } from '.';

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type Products = Product[];

export type ProductsView = 'grid' | 'list';

export type ProductFiltersValue = 'categories' | 'prices';

export type ProductFilters = {
  categories: Value[];
  prices: number[];
};

export type SortingProductsValue =
  | 'default'
  | 'price_asc'
  | 'price_desc'
  | 'name_asc'
  | 'name_desc'
  | 'rate_asc'
  | 'rate_desc';

export type SortingItem = {
  value: SortingProductsValue;
  name: string;
};
