import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Usuarios from './pages/Usuarios';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Carrito from './pages/Carrito';
import Favoritos from './pages/Favoritos';
import { useAuth } from './context/AuthContext';
import { useCart } from './context/CartContext';
import { useFavoritos } from './context/FavoritosContext';
import CarritoSidebar from './components/CarritoSidebar';
import LoginSidebar from './components/LoginSidebar';
import Recetas from './pages/Recetas';
import Ofertas from './pages/Ofertas';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './App.css';

function Navbar() {
    const { usuario } = useAuth();
    const { totalItems } = useCart();
    const { totalFavoritos } = useFavoritos();
    const [busqueda, setBusqueda] = useState('');
    const [carritoAbierto, setCarritoAbierto] = useState(false);
    const [loginAbierto, setLoginAbierto] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className="barra-top">
                <span>🚚 Despachos todos los miércoles y viernes</span>
                <div className="redes">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                </div>
            </div>

            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/"><span>🌿 Ecomarket</span></Link>
                </div>
                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={busqueda}
                        onChange={e => setBusqueda(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter' && busqueda.trim()) {
                                navigate(`/productos?nombre=${busqueda.trim()}`);
                                setBusqueda('');
                            }
                        }}
                    />
                    <button onClick={() => {
                        if (busqueda.trim()) {
                            navigate(`/productos?nombre=${busqueda.trim()}`);
                            setBusqueda('');
                        }
                    }}>Buscar</button>
                </div>
                <div className="navbar-icons">
                  <span
                      title="Mi cuenta"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setLoginAbierto(true)}
                  >
                      <FaUser /> {usuario ? usuario.nombre : ''}
                  </span>
                    <Link to="/favoritos" title="Favoritos">
                        <FaHeart /> {totalFavoritos > 0 && <span className="badge">{totalFavoritos}</span>}
                    </Link>
                    <span
                        title="Carrito"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setCarritoAbierto(true)}
                    >
                      <FaShoppingCart /> {totalItems > 0 && <span className="badge">{totalItems}</span>}
                  </span> {/* ✅ CORREGIDO: span en lugar de Link */}
                </div>
            </nav>

            <nav className="navbar-menu">
                <Link to="/">Home</Link>
                <div className="menu-dropdown">
                    <span className="menu-dropdown-trigger">Productos ▾</span>
                    <div className="menu-dropdown-content">
                        <Link to="/productos?categoria=Alimentos">🥦 Frutas y Verduras</Link>
                        <Link to="/productos?categoria=Alimentos">🍞 Panadería</Link>
                        <Link to="/productos?categoria=Alimentos">🌿 Granos y Semillas</Link>
                        <Link to="/productos?categoria=Cuidado Personal">🧴 Cuidado Personal</Link>
                        <Link to="/productos?categoria=Ropa">👕 Ropa Orgánica</Link>
                        <Link to="/productos?categoria=Hogar">🏠 Hogar</Link>
                        <Link to="/productos?categoria=Jardín">🌱 Jardín</Link>
                        <Link to="/productos">Ver Todo</Link>
                    </div>
                </div>
                <Link to="/ofertas">Ofertas</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contacto">Contáctanos</Link>
            </nav>

            <CarritoSidebar
                isOpen={carritoAbierto}
                onClose={() => setCarritoAbierto(false)}
            />
            <LoginSidebar
                isOpen={loginAbierto}
                onClose={() => setLoginAbierto(false)}
            />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />

                <main className="contenido">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/usuarios" element={<Usuarios />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                        <Route path="/recetas/:id" element={<Recetas />} />
                        <Route path="/ofertas" element={<Ofertas />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/contacto" element={<Contacto />} />
                    </Routes>
                </main>

                <footer className="footer">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h4>🌿 Ecomarket Spa</h4>
                            <p>Productos orgánicos y sustentables para un estilo de vida saludable.</p>
                        </div>
                        <div className="footer-col">
                            <h4>Navegación</h4>
                            <Link to="/">Inicio</Link>
                            <Link to="/productos">Productos</Link>
                            <Link to="/carrito">Carrito</Link>
                            <Link to="/favoritos">Favoritos</Link>
                        </div>
                        <div className="footer-col">
                            <h4>Contacto</h4>
                            <a href="mailto:contacto@ecomarket.cl">📧 contacto@ecomarket.cl</a>
                            <a href="https://maps.google.com/?q=Santiago,Chile" target="_blank" rel="noreferrer">📍 Santiago, Chile</a>
                            <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer">💬 WhatsApp</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>Ecomarket © 2025 — Desarrollado por Sebadilla®</p>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;