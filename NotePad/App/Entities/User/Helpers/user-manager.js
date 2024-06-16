import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setEmail, setPassword, registerUser, setLogin, setUserPassword, loginUser, clearErrors} from '../../../Processes/Authentication';

// Contexts to manage user authentication and registration
export const RegistrationContext = createContext();
export const LoginContext = createContext();

// Combined Provider
export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    // Registration state and actions
    const registerState = useSelector((state) => state.auth.register);
    const [serverError, setServerError] = useState([])

    if (registerState.error) {
        const tempArr = registerState.error.map(error => error.msg).filter(elem => !serverError.includes(elem))
        setServerError([...serverError, ...tempArr])
        dispatch(clearErrors())      
    }
    
    const [passwordState, setPasswordState] = useState({
        passwordRepeat: '',
        passwordsMatch: null
    });

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
        console.log(email) //Потом убрать
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

    const checkRegisterForm = () => {
        if (passwordState.passwordsMatch && registerState.name && registerState.email && registerState.password.length >= 6 && serverError.length === 0) {
            return true;
        } else if(registerState.password.length < 6 && registerState.name || registerState.email){
            setServerError([...serverError,"Password must be at least 6 characters long"])
            return false;
        } else if(!passwordState.passwordsMatch && !registerState.name && !registerState.email) {
            setServerError([...serverError,"Check that the data is entered correctly"])
            return false; 
        }
    }

    const checkEmailCode = () => {
        console.log(registerState.email)
    }

    const register = () => {
        if (passwordState.passwordsMatch && registerState.name && registerState.email && serverError.length === 0) {
            dispatch(registerUser(registerState));
        }
        // else {
        //     setServerError([...serverError,"Check that the data is entered correctly"]) 
        // }
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
            registerState, serverError, setServerError,
            username: registerState.username, updateUsername,
            email: registerState.email, updateEmail,
            password: registerState.password, updatePassword,
            passwordRepeat: passwordState.passwordRepeat, updatePasswordRepeat,
            passwordsMatch: passwordState.passwordsMatch, 
            checkRegisterForm, checkEmailCode, register,
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

