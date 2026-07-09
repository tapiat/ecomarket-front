import { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([]);

    const agregarFavorito = (producto) => {
        setFavoritos(prev => {
            const existe = prev.find(item => item.id === producto.id);
            if (existe) return prev;
            return [...prev, producto];
        });
    };

    const eliminarFavorito = (id) => {
        setFavoritos(prev => prev.filter(item => item.id !== id));
    };

    const esFavorito = (id) => {
        return favoritos.some(item => item.id === id);
    };

    const toggleFavorito = (producto) => {
        if (esFavorito(producto.id)) {
            eliminarFavorito(producto.id);
        } else {
            agregarFavorito(producto);
        }
    };

    const totalFavoritos = favoritos.length;

    return (
        <FavoritosContext.Provider value={{
            favoritos,
            agregarFavorito,
            eliminarFavorito,
            esFavorito,
            toggleFavorito,
            totalFavoritos
        }}>
            {children}
        </FavoritosContext.Provider>
    );
}

export function useFavoritos() {
    return useContext(FavoritosContext);
}