import { configureStore } from "@reduxjs/toolkit";
import { noteApi } from '../Note/API/note-api';
import {noteReducer} from '../Note/index';

export const store = configureStore({
  reducer: {
    [noteApi.reducerPath]: noteApi.reducer,
    note: noteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
});
