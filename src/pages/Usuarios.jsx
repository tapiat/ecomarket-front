import { useState, useEffect } from 'react';
import { getUsuarios } from '../services/api';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsuarios()
            .then(res => {
                setUsuarios(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Error al cargar usuarios');
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="loading">🌿 Cargando usuarios...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="usuarios-section">
            <h2>Gestión de Usuarios</h2>
            <table className="tabla-usuarios">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Estado</th>
                </tr>
                </thead>
                <tbody>
                {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombre} {usuario.apellido}</td>
                        <td>{usuario.email}</td>
                        <td><span className="rol-badge">{usuario.rol}</span></td>
                        <td>{usuario.activo ? '✅ Activo' : '❌ Inactivo'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;