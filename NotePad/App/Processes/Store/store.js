import { configureStore } from "@reduxjs/toolkit";
import { noteApi } from '../Note/API/note-api';

//Импорт редьюсеров Note
import {noteReducer} from '../Note/index';

//Импорт редьюсеров Auth
import authSlice from "../Authentication/API/auth-slice";

//Импорт редьюсеров Group
import groupSlice from "../Group/API/group-slice";

export const store = configureStore({
  reducer: {
    [noteApi.reducerPath]: noteApi.reducer,
    note: noteReducer,
    auth: authSlice,
    group: groupSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
});
