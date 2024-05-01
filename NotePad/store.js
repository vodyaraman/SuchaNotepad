import { configureStore } from '@reduxjs/toolkit';
import authSlice from './App/Processes/Authorisation/AuthorisationAPI/auth-redux-slice';

const store = configureStore({
  reducer: authSlice,
});

export default store;