import React, { createContext, useState, useEffect } from 'react';

//Создание констекста 
export const AuthorisationContext = createContext();

//Обеспечение контекстом корневого элемента
export const AuthorisationProvider = ({ children }) => {
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
        <AuthorisationContext.Provider value={{ user, handleSetUser }}>
            {children}
        </AuthorisationContext.Provider>
    );
};