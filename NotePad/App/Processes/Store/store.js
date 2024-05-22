import { configureStore } from "@reduxjs/toolkit";
import { noteApi } from './noteApi';
import noteReducer from '../Note/note-slice';

export const store = configureStore({
  reducer: {
    [noteApi.reducerPath]: noteApi.reducer,
    note: noteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
});
