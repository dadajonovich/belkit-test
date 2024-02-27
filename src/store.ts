import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { themeReducer } from "./features/theme/theme-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
