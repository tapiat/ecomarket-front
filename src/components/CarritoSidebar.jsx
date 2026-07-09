import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CarritoSidebar({ isOpen, onClose }) {
    const { carrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito, totalPrecio } = useCart();
    const navigate = useNavigate();

    const handleComprar = () => {
        onClose();
        navigate('/carrito');
    };

    return (
        <>
            {/* Overlay oscuro */}
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

            {/* Sidebar */}
            <div className={`carrito-sidebar ${isOpen ? 'abierto' : ''}`}>
                <div className="sidebar-header">
                    <h3>🛒 Mi Carrito</h3>
                    <button className="sidebar-cerrar" onClick={onClose}>✕</button>
                </div>

                <div className="sidebar-items">
                    {carrito.length === 0 ? (
                        <div className="sidebar-vacio">
                            <p>🛒 Tu carrito está vacío</p>
                            <button className="btn-conocenos" onClick={onClose}>
                                Ver Productos
                            </button>
                        </div>
                    ) : (
                        carrito.map(item => (
                            <div key={item.id} className="sidebar-item">
                                <div className="sidebar-item-imagen">
                                    {item.imagenUrl
                                        ? <img src={item.imagenUrl} alt={item.nombre} />
                                        : '🌿'}
                                </div>
                                <div className="sidebar-item-info">
                                    <h4>{item.nombre}</h4>
                                    <p>${item.precio?.toLocaleString('es-CL')}</p>
                                    <div className="sidebar-cantidad">
                                        <button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>−</button>
                                        <span>{item.cantidad}</span>
                                        <button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</button>
                                    </div>
                                </div>
                                <button className="sidebar-eliminar" onClick={() => eliminarDelCarrito(item.id)}>✕</button>
                            </div>
                        ))
                    )}
                </div>

                {carrito.length > 0 && (
                    <div className="sidebar-footer">
                        <div className="sidebar-total">
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
                )}
            </div>
        </>
    );
}

export default CarritoSidebar;