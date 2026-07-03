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

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="productos">
            <h2>Catálogo de Productos</h2>
            <div className="productos-grid">
                {productos.map(producto => (
                    <div key={producto.id} className="producto-card">
                        <h3>{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>
                        <p className="precio">${producto.precio}</p>
                        <p className="stock">Stock: {producto.stock}</p>
                        <span className="categoria">{producto.categoria}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;