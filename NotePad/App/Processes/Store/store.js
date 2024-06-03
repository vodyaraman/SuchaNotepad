import { configureStore } from "@reduxjs/toolkit";
import { noteApi } from '../Note/API/note-api';

//Импорт редьюсеров
import {noteReducer} from '../Note/index';
import authSlice from "../Authentication/API/auth-slice";

export const store = configureStore({
  reducer: {
    [noteApi.reducerPath]: noteApi.reducer,
    note: noteReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
});
