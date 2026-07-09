import { useFavoritos } from '../context/FavoritosContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Favoritos() {
    const { favoritos, eliminarFavorito } = useFavoritos();
    const { agregarAlCarrito } = useCart();
    const navigate = useNavigate();

    if (favoritos.length === 0) {
        return (
            <div className="carrito-vacio">
                <h2>🤍 No tienes favoritos</h2>
                <p>Agrega productos a tus favoritos para verlos aquí</p>
                <button className="btn-conocenos" onClick={() => navigate('/productos')}>
                    Ver Productos
                </button>
            </div>
        );
    }

    return (
        <div className="productos-section">
            <h2>🤍 Mis Favoritos</h2>
            <div className="productos-grid">
                {favoritos.map(producto => (
                    <div key={producto.id} className="producto-card">
                        <div className="producto-imagen">🌿</div>
                        <span className="categoria-badge">{producto.categoria}</span>
                        <h3>{producto.nombre}</h3>
                        <p className="descripcion">{producto.descripcion}</p>
                        <p className="precio">${producto.precio?.toLocaleString('es-CL')}</p>
                        <p className="stock">Stock: {producto.stock} unidades</p>
                        <div className="producto-botones">
                            <button
                                className="btn-agregar"
                                onClick={() => agregarAlCarrito(producto)}>
                                🛒 Agregar al carrito
                            </button>
                            <button
                                className="btn-eliminar-fav"
                                onClick={() => eliminarFavorito(producto.id)}>
                                🗑️ Quitar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favoritos;