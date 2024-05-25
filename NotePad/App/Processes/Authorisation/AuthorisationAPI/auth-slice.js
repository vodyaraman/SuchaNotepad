import apiClient from '../../../Pull/Utils/APIClient';
import { createSlice } from '@reduxjs/toolkit';
import { saveTokenToLocalStorage } from '../Helpers/save-token';

// Создание слайса для аутентификации
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
  },
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.token = action.payload.token;
    },
  },
});

export const { setAuth } = authSlice.actions;



// Авторизация зарегистрированного пользователя
export const loginUser = (email, password, name) => async (dispatch) => {
  try {
    const { data } = await apiClient.post('/users/login', { email, password, name });
    const { token } = data;

    dispatch(setAuth({ isAuthenticated: true, token }));
    saveTokenToLocalStorage(token);
  } catch (error) {
    console.error('Login error:', error);
    // Дополнительно: обработка ошибки для пользователя
  }
};

// Регистрация нового пользователя
export const registerUser = (userData) => async (dispatch) => {
  try {
    const data = await apiClient.post('/users/register', userData);

    console.log('Received data:', data.token);

    const token = data.token;

    if (token) {
      dispatch(setAuth({ isAuthenticated: true, token }));
      saveTokenToLocalStorage(token);
    } else {
      console.log('No token received');
    }
  } catch (error) {
    console.error('Registration error:', error);
    // Дополнительно: обработка ошибки
  }
};

export default authSlice.reducer;
