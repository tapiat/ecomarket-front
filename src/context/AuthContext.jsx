import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);

    const login = (userData) => {
        setUsuario(userData);
        localStorage.setItem('usuario', JSON.stringify(userData));
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('usuario');
    };

    const isLoggedIn = () => usuario !== null;

    return (
        <AuthContext.Provider value={{ usuario, login, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}