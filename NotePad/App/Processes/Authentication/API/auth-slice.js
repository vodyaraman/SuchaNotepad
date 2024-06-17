import { createSlice } from '@reduxjs/toolkit';
import { checkEmailRegister, loginUser, registerUser, sendEmailCode, validateEmailCode } from './auth-thunks';

// Создание слайса для аутентификации
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: {
      login: '',
      userPassword: '',
      isAuthenticated: false,
      token: null,
      loading: false,
      error: null,
    },
    register: {
      name: '',
      email: '',
      password: '',
      isActivate: false,
      isAuthenticated: false,
      token: null,
      loading: false,
      error: null,
    }
  },
  reducers: {
    setAuth(state, action) {
      state.login.isAuthenticated = action.payload.isAuthenticated;
      state.login.token = action.payload.token;
      state.register.isAuthenticated = action.payload.isAuthenticated;
      state.register.token = action.payload.token;
    },
    logout(state) {
      state.login.isAuthenticated = false;
      state.login.token = null;
      state.register.isAuthenticated = false;
      state.register.token = null;
    },
    setUsername(state, action) {
      state.register.name = action.payload;
    },
    setEmail(state, action) {
      state.register.email = action.payload;
    },
    setPassword(state, action) {
      state.register.password = action.payload;
    },
    setLogin(state, action) {
      state.login.login = action.payload;
    },
    setUserPassword(state, action) {
      state.login.userPassword = action.payload;
    },
    clearErrors(state){
      state.register.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.login.loading = true;
        state.login.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.isAuthenticated = action.payload.isAuthenticated;
        state.login.token = action.payload.token;
        state.login.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.loading = false;
        state.login.error = action.payload;
      })
      .addCase(sendEmailCode.pending, (state) => {
        state.register.loading = true;
        state.register.error = null;
      })
      .addCase(sendEmailCode.fulfilled, (state) => {
        state.register.loading = false;
      })
      .addCase(sendEmailCode.rejected, (state, action) => {
        state.register.loading = false;
        state.register.error = action.payload
      })
      .addCase(validateEmailCode.pending, (state) => {
        state.register.loading = true;
        state.register.error = null;
      })
      .addCase(validateEmailCode.fulfilled, (state) => {
        state.register.loading = true;
        state.register.error = null;
      })
      .addCase(validateEmailCode.rejected, (state, action) => {
        state.register.loading = false;
        state.register.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.register.loading = true;
        state.register.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.register.isAuthenticated = action.payload.isAuthenticated;
        state.register.token = action.payload.token;
        state.register.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.register.loading = false;
        state.register.error = action.payload
      });
  },
});

export const { setAuth, logout, setUsername, setEmail, setPassword, setLogin, setUserPassword, clearErrors} = authSlice.actions;

export default authSlice.reducer;


