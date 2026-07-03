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

    if (loading) return <p>Cargando usuarios...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="usuarios">
            <h2>Usuarios</h2>
            <table className="tabla-usuarios">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Activo</th>
                </tr>
                </thead>
                <tbody>
                {usuarios.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombre} {usuario.apellido}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.rol}</td>
                        <td>{usuario.activo ? '✅' : '❌'}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;