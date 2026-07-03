import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080/api'
});

// ─── Usuarios ───────────────────────────────────────────────────────────────
export const getUsuarios = () => API.get('/usuarios');
export const getUsuario = (id) => API.get(`/usuarios/${id}`);
export const createUsuario = (data) => API.post('/usuarios', data);
export const updateUsuario = (id, data) => API.put(`/usuarios/${id}`, data);
export const deleteUsuario = (id) => API.delete(`/usuarios/${id}`);

// ─── Productos ──────────────────────────────────────────────────────────────
export const getProductos = () => API.get('/productos');
export const getProducto = (id) => API.get(`/productos/${id}`);
export const createProducto = (data) => API.post('/productos', data);
export const updateProducto = (id, data) => API.put(`/productos/${id}`, data);
export const deleteProducto = (id) => API.delete(`/productos/${id}`);
export const getProductosPorCategoria = (categoria) => API.get(`/productos?categoria=${categoria}`);

// ─── Pedidos ────────────────────────────────────────────────────────────────
export const getPedidos = () => API.get('/pedidos');
export const getPedido = (id) => API.get(`/pedidos/${id}`);
export const createPedido = (data) => API.post('/pedidos', data);

// ─── Pagos ──────────────────────────────────────────────────────────────────
export const getPagos = () => API.get('/pagos');
export const createPago = (data) => API.post('/pagos', data);