import { BasketItem } from '@models/basket';

export const getTotalPrice = (items: BasketItem[]) =>
  items.reduce((total, item) => total + item.price * item.amount, 0);
