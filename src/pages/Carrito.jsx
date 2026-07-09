import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Carrito() {
    const { carrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito, totalPrecio } = useCart();
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleComprar = () => {
        if (!isLoggedIn()) {
            navigate('/login');
            return;
        }
        alert('¡Compra realizada con éxito! 🎉');
        vaciarCarrito();
    };

    if (carrito.length === 0) {
        return (
            <div className="carrito-vacio">
                <h2>🛒 Tu carrito está vacío</h2>
                <p>Agrega productos para comenzar tu compra</p>
                <button className="btn-conocenos" onClick={() => navigate('/productos')}>
                    Ver Productos
                </button>
            </div>
        );
    }

    return (
        <div className="carrito-section">
            <h2>🛒 Mi Carrito</h2>
            <div className="carrito-contenido">
                <div className="carrito-items">
                    {carrito.map(item => (
                        <div key={item.id} className="carrito-item">
                            <div className="carrito-item-imagen">🌿</div>
                            <div className="carrito-item-info">
                                <h3>{item.nombre}</h3>
                                <p className="carrito-item-precio">${item.precio?.toLocaleString('es-CL')}</p>
                            </div>
                            <div className="carrito-item-cantidad">
                                <button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>−</button>
                                <span>{item.cantidad}</span>
                                <button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</button>
                            </div>
                            <div className="carrito-item-subtotal">
                                ${(item.precio * item.cantidad)?.toLocaleString('es-CL')}
                            </div>
                            <button className="carrito-item-eliminar" onClick={() => eliminarDelCarrito(item.id)}>✕</button>
                        </div>
                    ))}
                </div>

                <div className="carrito-resumen">
                    <h3>Resumen de compra</h3>
                    <div className="resumen-linea">
                        <span>Subtotal</span>
                        <span>${totalPrecio?.toLocaleString('es-CL')}</span>
                    </div>
                    <div className="resumen-linea">
                        <span>Despacho</span>
                        <span>Gratis</span>
                    </div>
                    <div className="resumen-total">
                        <span>Total</span>
                        <span>${totalPrecio?.toLocaleString('es-CL')}</span>
                    </div>
                    <button className="btn-comprar" onClick={handleComprar}>
                        Finalizar Compra
                    </button>
                    <button className="btn-vaciar" onClick={vaciarCarrito}>
                        Vaciar Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carrito;