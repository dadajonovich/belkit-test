import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { themeReducer } from './features/theme/theme-slice';
import { dataApi } from './features/data/data-api';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
