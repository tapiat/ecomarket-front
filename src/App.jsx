import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Usuarios from './pages/Usuarios';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <nav className="navbar">
            <div className="navbar-brand">
              <span>🌿 Ecomarket Spa</span>
            </div>
            <ul className="navbar-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/usuarios">Usuarios</Link></li>
            </ul>
          </nav>

          <main className="contenido">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/usuarios" element={<Usuarios />} />
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
                <Link to="/usuarios">Usuarios</Link>
              </div>
              <div className="footer-col">
                <h4>Contacto</h4>
                <p>📧 contacto@ecomarket.cl</p>
                <p>📍 Santiago, Chile</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>Ecomarket Spa © 2025 — Desarrollado con Spring Boot + React</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;