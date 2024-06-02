import React, { createContext, useState, useEffect } from 'react';

//Создание констекста 
export const AuthenticationContext = createContext();

//Обеспечение контекстом корневого элемента
export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const handleSetUser = (newUser) => {
        setUser(newUser);
    };

    return (
        <AuthenticationContext.Provider value={{ user, handleSetUser }}>
            {children}
        </AuthenticationContext.Provider>
    );
};