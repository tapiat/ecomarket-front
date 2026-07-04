import { useState, useEffect } from 'react';
import { getProductos } from '../services/api';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProductos()
            .then(res => {
                setProductos(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Error al cargar productos');
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="loading">🌿 Cargando productos...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="productos-section">
            <h2>Catálogo de Productos</h2>
            <div className="productos-grid">
                {productos.map(producto => (
                    <div key={producto.id} className="producto-card">
                        <div className="producto-imagen">🌿</div>
                        <span className="categoria-badge">{producto.categoria}</span>
                        <h3>{producto.nombre}</h3>
                        <p className="descripcion">{producto.descripcion}</p>
                        <p className="precio">${producto.precio?.toLocaleString('es-CL')}</p>
                        <p className="stock">Stock disponible: {producto.stock} unidades</p>
                        <button className="btn-agregar">Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;