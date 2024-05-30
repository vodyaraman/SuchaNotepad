import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setEmail, setPassword, setPasswordRepeat, setLogin, setUserPassword, registerUser, loginUser } from '../../../Processes/Authorisation/auth-slice'; // скорректируйте путь

// Context to manage user authentication and registration
export const UserContext = createContext();

// Provider
export const UserProvider = ({ children }) => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const updateUsername = (username) => {
        dispatch(setUsername(username));
    };

    const updateEmail = (email) => {
        dispatch(setEmail(email));
    };

    const updatePassword = (password) => {
        dispatch(setPassword(password));
    };

    const updatePasswordRepeat = (passwordRepeat) => {
        dispatch(setPasswordRepeat(passwordRepeat));
    };

    const updateLogin = (login) => {
        dispatch(setLogin(login));
    };

    const updateUserPassword = (userPassword) => {
        dispatch(setUserPassword(userPassword));
    };

    const { username, email, password, passwordRepeat, login, userPassword} = auth;

    return (
        <UserContext.Provider value={{
            username, updateUsername,
            email, updateEmail,
            password, updatePassword,
            passwordRepeat, updatePasswordRepeat,
            login, updateLogin,
            userPassword, updateUserPassword
        }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook
export const useUser = () => useContext(UserContext);
