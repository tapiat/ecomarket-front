import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Productos from './pages/Productos.jsx';
import Usuarios from './pages/Usuarios.jsx';
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
            <p>Ecomarket Spa © 2025 — Desarrollado con Spring Boot + React</p>
          </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;