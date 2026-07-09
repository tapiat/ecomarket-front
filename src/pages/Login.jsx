import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUsuarios } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await getUsuarios();
            const usuario = res.data.find(
                u => u.email === email && u.password === password
            );
            if (usuario) {
                login(usuario);
                navigate('/');
            } else {
                setError('Email o contraseña incorrectos');
            }
        } catch (err) {
            setError('Error al conectar con el servidor');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>🌿 Iniciar Sesión</h2>
                <p>Bienvenido de vuelta a Ecomarket Spa</p>

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
                    <button type="submit" className="btn-auth">Iniciar Sesión</button>
                </form>

                <p className="auth-link">
                    ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;