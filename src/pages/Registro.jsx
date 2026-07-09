import { useState } from 'react';
import { createUsuario } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Registro() {
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        telefono: '',
        direccion: '',
        rol: 'CLIENTE'
    });
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegistro = async (e) => {
        e.preventDefault();
        try {
            const res = await createUsuario(form);
            login(res.data);
            navigate('/');
        } catch (err) {
            setError('Error al crear la cuenta. El email ya puede estar registrado.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>🌿 Crear Cuenta</h2>
                <p>Únete a Ecomarket Spa</p>

                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleRegistro}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Tu nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Apellido</label>
                            <input
                                type="text"
                                name="apellido"
                                placeholder="Tu apellido"
                                value={form.apellido}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="tu@email.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Teléfono</label>
                        <input
                            type="text"
                            name="telefono"
                            placeholder="+56 9 1234 5678"
                            value={form.telefono}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Dirección</label>
                        <input
                            type="text"
                            name="direccion"
                            placeholder="Tu dirección"
                            value={form.direccion}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn-auth">Crear Cuenta</button>
                </form>

                <p className="auth-link">
                    ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
                </p>
            </div>
        </div>
    );
}

export default Registro;