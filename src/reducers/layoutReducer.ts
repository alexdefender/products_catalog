import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LayoutState } from '@models/state';

const initialState: LayoutState = {
  mode: 'light',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setLayoutMode(state, action: PayloadAction<LayoutState['mode']>) {
      state.mode = action.payload;
    },
  },
});

export const layoutActions = layoutSlice.actions;

export const layoutReducer = layoutSlice.reducer;
