import React, { createContext, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setEmail, setPassword, validateUserData, registerUser, setLogin, setUserPassword, loginUser, setError, clearErrors} from '../../../Processes/Authentication';

// Contexts to manage user authentication and registration
export const RegistrationContext = createContext();
export const LoginContext = createContext();

// Combined Provider
export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    // Registration state and actions
    const registerState = useSelector((state) => state.auth.register);
    
    const [passwordState, setPasswordState] = useState({
        passwordRepeat: '',
        passwordsMatch: null
    });

    const setErrors = (err) => {
        dispatch(clearErrors())
        dispatch(setError(err))
    }

    const setRegistration = (updatedRegister) => {
        dispatch(setUsername(updatedRegister.name));
        dispatch(setEmail(updatedRegister.email));
        dispatch(setPassword(updatedRegister.password));
    };

    const updateUsername = (name) => {
        setRegistration({ ...registerState, name });
    };

    const updateEmail = (email) => {
        setRegistration({ ...registerState, email });
    };

    const updatePassword = (password) => {
        setRegistration({ ...registerState, password });
        
        setPasswordState({
            ...passwordState,
            passwordsMatch: password === passwordState.passwordRepeat
        });
    };


    const updatePasswordRepeat = (repeatPassword) => {
        setPasswordState({
            passwordRepeat: repeatPassword,
            passwordsMatch: repeatPassword === registerState.password
        });
    };

    const checkRegisterForm = async () => {
        if(passwordState.passwordsMatch && registerState.name && registerState.email){
            const status = await validateUserData(registerState)
                       
            if (status.status) {
                return true;
            }else{
                const errorMsg = status.map(err => err.msg)
                setErrors(errorMsg)
                return false;
            }
        }
        else {
            setErrors(["Check that the data is entered correctly"]) 
        }
    }

    const register = (code) => {  
        dispatch(registerUser({code}));
    };

    // Login state and actions
    const loginState = useSelector((state) => state.auth.login);

    const setLoginState = (updatedLogin) => {
        dispatch(setLogin(updatedLogin.login));
        dispatch(setUserPassword(updatedLogin.userPassword));
    };

    const updateLogin = (login) => {
        setLoginState({ ...loginState, login });
    };

    const updateUserPassword = (userPassword) => {
        setLoginState({ ...loginState, userPassword });
    };

    const makeLogin = () => {
        dispatch(loginUser(loginState));
    };

    return (
        <RegistrationContext.Provider value={{
            registerState,
            username: registerState.username, updateUsername,
            email: registerState.email, updateEmail,
            password: registerState.password, updatePassword,
            passwordRepeat: passwordState.passwordRepeat, updatePasswordRepeat,
            passwordsMatch: passwordState.passwordsMatch, 
            checkRegisterForm, register, setErrors
        }}>
            <LoginContext.Provider value={{
                login: loginState.login, updateLogin,
                userPassword: loginState.userPassword, updateUserPassword,
                makeLogin,
            }}>
                {children}
            </LoginContext.Provider>
        </RegistrationContext.Provider>
    );
};

// Custom hooks
export const useRegistration = () => useContext(RegistrationContext);
export const useLogin = () => useContext(LoginContext);

