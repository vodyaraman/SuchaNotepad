import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../../Pull/Utils/APIClient';
import { saveTokenToLocalStorage } from '../Helpers/save-token';

// Асинхронные действия
export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password, name }, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.post('/users/login', { email, password, name });
    const { token } = data;
    saveTokenToLocalStorage(token);
    return { isAuthenticated: true, token };
  } catch (error) {
    console.error('Login error:', error);
    return rejectWithValue(error.response.data);
  }
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await apiClient.post('/users/register', userData);
    console.log(response)

    const { token } = response.data;
    if (token) {
      saveTokenToLocalStorage(token);
      return { isAuthenticated: true, token };
    } else {
      console.log('No token received');
      return rejectWithValue(response.data);
    }
    
  } catch (error) {
    return rejectWithValue(error);
  }
});
