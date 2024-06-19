import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../../Pull/Utils/APIClient';
import Relocate from '../../Navigation/Rules/stack-rules';
import { saveTokenToLocalStorage } from '../Helpers/save-token';

// Асинхронные действия
export const loginUser = createAsyncThunk('auth/loginUser', async ({ login, userPassword }, { rejectWithValue }) => {
  try {
    const response = await apiClient.post('/users/login', { email: login, password: userPassword });
    const { token } = response.data;

    if (token) {
      saveTokenToLocalStorage(token);

      Relocate.toMain();

      return { isAuthenticated: true, token };
    } else {
      console.log('No token received');
      return rejectWithValue(response.data);
    }
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
      return { isActivate: true, isAuthenticated: true, token };
    } else {
      console.log('No token received');
      return rejectWithValue(response.data);
    }
    
  } catch (error) {
    return rejectWithValue(error);
  }
});

//Проверка кода на совпадение 
export const validateEmailCode = createAsyncThunk('auth/validateEmailCode', async (code, {rejectWithValue}) =>{
  try {
    const response = await apiClient.post('/users/validateEmailCode', {code});
    console.log(response)
    if(response.data){
      return true;
    } else{
      return false;
    }
  } catch (error) {
    console.log(error)
    return rejectWithValue(error);
  }
});
