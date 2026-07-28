import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProductos } from '../services/api';
import { useCart } from '../context/CartContext';
import { useFavoritos } from '../context/FavoritosContext';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoriaActiva, setCategoriaActiva] = useState('Todos');
    const { agregarAlCarrito } = useCart();
    const { toggleFavorito, esFavorito } = useFavoritos();
    const [searchParams, setSearchParams] = useSearchParams();

    const categorias = ['Todos', 'Alimentos', 'Cuidado Personal', 'Ropa', 'Hogar', 'Jardín'];

    // 👇 CAMBIO 1: Variables para el contador
    const nombreBuscado = searchParams.get('nombre');
    const categoriaBuscada = searchParams.get('categoria');

    useEffect(() => {
        getProductos()
            .then(res => {
                setProductos(res.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Error al cargar productos');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (productos.length > 0) {
            const categoria = searchParams.get('categoria');
            const nombre = searchParams.get('nombre');

            if (nombre) {
                setCategoriaActiva('Todos');
                const filtrados = productos.filter(p =>
                    p.nombre.toLowerCase().includes(nombre.toLowerCase()) ||
                    p.descripcion?.toLowerCase().includes(nombre.toLowerCase()) ||
                    p.categoria.toLowerCase().includes(nombre.toLowerCase())
                );
                setProductosFiltrados(filtrados);
            } else if (categoria) {
                setCategoriaActiva(categoria);
                setProductosFiltrados(productos.filter(p => p.categoria === categoria));
            } else {
                setCategoriaActiva('Todos');
                setProductosFiltrados(productos);
            }
        }
    }, [productos, searchParams]);

    const filtrarPorCategoria = (categoria) => {
        setCategoriaActiva(categoria);

        if (categoria === 'Todos') {
            const params = new URLSearchParams(searchParams);
            params.delete('categoria');
            setSearchParams(params);
        } else {
            setSearchParams({ categoria });
        }
    };

    // 👇 CAMBIO 2: Loading mientras carga
    if (loading) return <p className="loading">🌿 Cargando productos...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="productos-section">
            <h2>Catálogo de Productos</h2>

            <div className="categorias-filtro">
                {categorias.map(cat => (
                    <button
                        key={cat}
                        className={`filtro-btn ${categoriaActiva === cat ? 'activo' : ''}`}
                        onClick={() => filtrarPorCategoria(cat)}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* 👇 CAMBIO 3: Contador SOLO aparece cuando NO está cargando */}
            {!loading && (
                <p className="productos-count">
                    {productosFiltrados.length} {productosFiltrados.length !== 1 ? 'productos encontrados' : 'producto encontrado'}
                    {nombreBuscado && ` para "${nombreBuscado}"`}
                    {categoriaBuscada && !nombreBuscado && ` en "${categoriaBuscada}"`}
                </p>
            )}

            {productosFiltrados.length > 0 ? (
                <div className="productos-grid">
                    {productosFiltrados.map(producto => (
                        <div key={producto.id} className="producto-card">
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
                            <p className="precio">${producto.precio?.toLocaleString('es-CL')}</p>
                            <p className="stock">Stock: {producto.stock} unidades</p>
                            <button
                                className="btn-agregar"
                                onClick={() => agregarAlCarrito(producto)}>
                                🛒 Agregar al carrito
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="sin-productos">
                    <p>😔 No hay productos que coincidan con tu búsqueda.</p>
                </div>
            )}
        </div>
    );
}

export default Productos;