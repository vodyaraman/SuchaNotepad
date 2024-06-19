// Importing from API
import authReducer, { setAuth, logout, setUsername, setEmail, setPassword, setLogin, setUserPassword, setError, clearErrors } from './API/auth-slice';
import { loginUser, registerUser, validateEmailCode } from './API/auth-thunks';

// Importing from Helpers
import { saveTokenToLocalStorage } from './Helpers/save-token';
import {validateUserData} from './Helpers/validate-userdata';

export {
    authReducer, setAuth, logout, setUsername, setEmail, setPassword, setLogin, setUserPassword,
    loginUser, registerUser, validateUserData, validateEmailCode, setError, clearErrors, saveTokenToLocalStorage };
