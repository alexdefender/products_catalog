import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { DialogState, DialogsState } from '@models/state';
import { DIALOGS } from '@constants';
import { DialogDataMap } from '@containers/Dialogs';

export type DialogName = (typeof DIALOGS)[keyof typeof DIALOGS];

type DialogAction = {
  name: DialogName;
  data?: DialogDataMap[keyof DialogDataMap];
};

const initialDialogState: DialogState = {
  isOpen: false,
  data: {},
};

const setInitialValues = () => {
  const state: DialogsState = {};

  Object.values(DIALOGS).forEach((name) => {
    state[name] = {
      ...initialDialogState,
    };
  });

  return state;
};

const initialState = setInitialValues();

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    openDialog(state, action: PayloadAction<DialogAction>) {
      state[action.payload.name] = {
        isOpen: true,
        data: action.payload.data || {},
      };
    },
    closeDialog(state, action: PayloadAction<DialogAction>) {
      state[action.payload.name] = {
        ...initialDialogState,
      };
    },
    closeAllDialogs() {
      return initialState;
    },
    resetDialogsState() {
      return { ...initialState };
    },
  },
});

export const dialogsActions = dialogsSlice.actions;

export const dialogsReducer = dialogsSlice.reducer;
