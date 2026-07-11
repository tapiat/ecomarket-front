import { useState, useEffect } from 'react';
import { getProductos } from '../services/api';
import { useCart } from '../context/CartContext';
import { useFavoritos } from '../context/FavoritosContext';

function Ofertas() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { agregarAlCarrito } = useCart();
    const { toggleFavorito, esFavorito } = useFavoritos();

    useEffect(() => {
        getProductos()
            .then(res => {
                // Tomamos los primeros 6 productos como "ofertas"
                setProductos(res.data.slice(0, 6));
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return <p className="loading">🌿 Cargando ofertas...</p>;

    return (
        <div className="ofertas-page">
            <div className="ofertas-hero">
                <h1>🏷️ Ofertas Especiales</h1>
                <p>Aprovecha nuestros descuentos en productos orgánicos seleccionados</p>
            </div>

            <div className="productos-section">
                <div className="productos-grid">
                    {productos.map(producto => (
                        <div key={producto.id} className="producto-card">
                            <div className="oferta-badge">-20%</div>
                            <button
                                className={`btn-favorito ${esFavorito(producto.id) ? 'activo' : ''}`}
                                onClick={() => toggleFavorito(producto)}>
                                {esFavorito(producto.id) ? '❤️' : '🤍'}
                            </button>
                            <div className="producto-imagen">
                                {producto.imagenUrl
                                    ? <img src={producto.imagenUrl} alt={producto.nombre} />
                                    : '🌿'}
                            </div>
                            <span className="categoria-badge">{producto.categoria}</span>
                            <h3>{producto.nombre}</h3>
                            <p className="descripcion">{producto.descripcion}</p>
                            <div className="oferta-precios">
                                <span className="precio-tachado">
                                    ${Math.round(producto.precio * 1.25).toLocaleString('es-CL')}
                                </span>
                                <span className="precio">
                                    ${producto.precio?.toLocaleString('es-CL')}
                                </span>
                            </div>
                            <p className="stock">Stock: {producto.stock} unidades</p>
                            <button
                                className="btn-agregar"
                                onClick={() => agregarAlCarrito(producto)}>
                                🛒 Agregar al carrito
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ofertas;