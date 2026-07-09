import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
import './App.css';

function Navbar() {
  const { usuario } = useAuth();
  const { totalItems } = useCart();
  const { totalFavoritos } = useFavoritos();
  const [busqueda, setBusqueda] = useState('');
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [loginAbierto, setLoginAbierto] = useState(false);

  return (
      <>
        <div className="barra-top">
          <span>🚚 Despachos todos los miércoles y viernes</span>
          <div className="redes">
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">▶️</a>
            <a href="#">💬</a>
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
            />
            <button>Buscar</button>
          </div>
          <div className="navbar-icons">
                    <span
                        title="Mi cuenta"
                        style={{cursor:'pointer'}}
                        onClick={() => setLoginAbierto(true)}>
                        👤 {usuario ? usuario.nombre : ''}
                    </span>
            <Link to="/favoritos" title="Favoritos">
              🤍 {totalFavoritos > 0 && <span className="badge">{totalFavoritos}</span>}
            </Link>
            <span
                title="Carrito"
                style={{cursor:'pointer'}}
                onClick={() => setCarritoAbierto(true)}>
                        🛒 {totalItems > 0 && <span className="badge">{totalItems}</span>}
                    </span>
          </div>
        </nav>

        <nav className="navbar-menu">
          <Link to="/">Home</Link>
          <Link to="/productos">Productos</Link>
          <a href="#">Ofertas</a>
          <a href="#">Nosotros</a>
          <a href="#">Contáctanos</a>
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
                <p>📧 contacto@ecomarket.cl</p>
                <p>📍 Santiago, Chile</p>
                <p>💬 WhatsApp</p>
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