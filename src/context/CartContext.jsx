import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito(prev => {
            const existe = prev.find(item => item.id === producto.id);
            if (existe) {
                return prev.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }
            return [...prev, { ...producto, cantidad: 1 }];
        });
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(prev => prev.filter(item => item.id !== id));
    };

    const actualizarCantidad = (id, cantidad) => {
        if (cantidad <= 0) {
            eliminarDelCarrito(id);
            return;
        }
        setCarrito(prev =>
            prev.map(item => item.id === id ? { ...item, cantidad } : item)
        );
    };

    const vaciarCarrito = () => setCarrito([]);

    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    const totalPrecio = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            eliminarDelCarrito,
            actualizarCantidad,
            vaciarCarrito,
            totalItems,
            totalPrecio
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}