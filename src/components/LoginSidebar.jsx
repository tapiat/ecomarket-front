import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUsuarios } from '../services/api';
import { Link } from 'react-router-dom';

function LoginSidebar({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { usuario, login, logout } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await getUsuarios();
            const user = res.data.find(
                u => u.email === email && u.password === password
            );
            if (user) {
                login(user);
                setError('');
                onClose();
            } else {
                setError('Email o contraseña incorrectos');
            }
        } catch (err) {
            setError('Error al conectar con el servidor');
        }
    };

    const handleLogout = () => {
        logout();
        onClose();
    };

    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

            <div className={`login-sidebar ${isOpen ? 'abierto' : ''}`}>
                <div className="sidebar-header">
                    <h3>👤 {usuario ? `Hola, ${usuario.nombre}` : 'Mi Cuenta'}</h3>
                    <button className="sidebar-cerrar" onClick={onClose}>✕</button>
                </div>

                <div className="login-sidebar-contenido">
                    {usuario ? (
                        <div className="usuario-info">
                            <div className="usuario-avatar">👤</div>
                            <h3>{usuario.nombre} {usuario.apellido}</h3>
                            <p>{usuario.email}</p>
                            <span className="rol-badge">{usuario.rol}</span>
                            <button className="btn-auth" onClick={handleLogout} style={{marginTop: '2rem'}}>
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        <>
                            {error && <div className="auth-error">{error}</div>}
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder="tu@email.com"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Contraseña</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn-auth">
                                    Iniciar Sesión
                                </button>
                            </form>
                            <p className="auth-link">
                                ¿No tienes cuenta? <Link to="/registro" onClick={onClose}>Regístrate aquí</Link>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default LoginSidebar;