import { ProductFilters, SortingItem, Products } from '@models/product';

export const getFilteredProductsList = (list: Products, filters: ProductFilters) => {
  let res = list;

  if (filters.categories.length) {
    const selectedCategories = filters.categories.map((c) => c.value);
    res = res.filter((item) => selectedCategories.includes(item.category));
  }

  if (filters.prices.length) {
    const [min, max] = filters.prices;
    res = res.filter((item) => item.price >= min && item.price <= max);
  }

  return res;
};

export const getSortedProductsList = (list: Products, sorting: SortingItem) => {
  return [...list].sort((a, b) => {
    switch (sorting.value) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      case 'name_asc':
        return a.title.localeCompare(b.title, undefined, { sensitivity: 'base' });
      case 'name_desc':
        return b.title.localeCompare(a.title, undefined, { sensitivity: 'base' });
      case 'rate_asc':
        return a.rating.rate - b.rating.rate;
      case 'rate_desc':
        return b.rating.rate - a.rating.rate;
      default:
        return 0;
    }
  });
};
