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

export type ProductFilters = 'categories' | 'prices';
