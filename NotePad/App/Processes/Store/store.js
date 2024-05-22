import { configureStore } from "@reduxjs/toolkit";
import { noteApi } from './noteApi';
import noteReducer from './noteSlice';

export const store = configureStore({
  reducer: {
    [noteApi.reducerPath]: noteApi.reducer,
    note: noteReducer, // Добавление слайса в редьюсеры
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
});
