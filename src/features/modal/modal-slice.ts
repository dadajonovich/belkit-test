import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  isVisible: false,
};

const modalSlice = createSlice({
  name: '@@modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<string>) => {
      return { ...state, message: action.payload, isVisible: true };
    },
    hideModal: () => initialState,
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
