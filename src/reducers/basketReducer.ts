import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BasketState } from '@models/state';
import { BasketItem } from '@models/basket';

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasketItem(state, action: PayloadAction<Omit<BasketItem, 'amount'>>) {
      const index = state.items.findIndex((item) => item?.id === action.payload.id);
      if (index !== -1) {
        state.items[index].amount += 1;
      } else {
        state.items = [...state.items, { ...action.payload, amount: 1 }];
      }
    },
    deleteBasketItem(state, action: PayloadAction<Pick<BasketItem, 'id'>>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateAmountBasketItem(state, action: PayloadAction<Pick<BasketItem, 'id' | 'amount'>>) {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, amount: action.payload.amount } : item,
      );
    },
    resetBasketState() {
      return { ...initialState };
    },
  },
});

export const basketActions = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
