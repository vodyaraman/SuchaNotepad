import apiClient from '../shared/utils/httpClient';
import { createSlice } from '@reduxjs/toolkit';
import { decodeJwt } from '../shared/utils/jwtUtils';

// Создание процесса для аутентификации
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setAuth } = authSlice.actions;

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const data = await apiClient.post('/users/login', { email, password });
    const { token } = data;

    const user = decodeJwt(token);

    dispatch(setAuth({ isAuthenticated: true, user, token }));
    localStorage.setItem('authToken', token);
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export default authSlice.reducer;