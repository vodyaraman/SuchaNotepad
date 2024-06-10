// Importing from API
import authReducer, { setAuth, logout, setUsername, setEmail, setPassword, setLogin, setUserPassword, clearErrors } from './API/auth-slice';
import { loginUser, registerUser } from './API/auth-thunks';

// Importing from Helpers
import { saveTokenToLocalStorage } from './Helpers/save-token';

export {
    authReducer, setAuth, logout, setUsername, setEmail, setPassword, setLogin, setUserPassword,
    loginUser, registerUser, clearErrors, saveTokenToLocalStorage };
