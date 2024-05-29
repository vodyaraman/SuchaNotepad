// Здесь развернут Context API для контроля пользователей

import React, { createContext, useState } from 'react';
import { useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // для регистрации
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    // для авторизации
    const [login, setLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <UserContext.Provider value={{
            username,
            setUsername,
            email,
            setEmail,
            password,
            setPassword,
            passwordRepeat,
            setPasswordRepeat,
            login,
            setLogin,
            userPassword,
            setUserPassword
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};