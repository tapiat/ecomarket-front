function Inicio() {
    return (
        <div className="inicio">
            <h1>🌿 Bienvenido a Ecomarket Spa</h1>
            <p>Sistema de e-commerce desarrollado con Spring Boot y React.</p>
            <div className="cards-inicio">
                <div className="card">
                    <h3>🛍️ Productos</h3>
                    <p>Catálogo de productos orgánicos y sustentables</p>
                </div>
                <div className="card">
                    <h3>👥 Usuarios</h3>
                    <p>Gestión de clientes y administradores</p>
                </div>
                <div className="card">
                    <h3>📦 Pedidos</h3>
                    <p>Seguimiento de pedidos en tiempo real</p>
                </div>
                <div className="card">
                    <h3>💳 Pagos</h3>
                    <p>Procesamiento seguro de pagos</p>
                </div>
            </div>
        </div>
    );
}

export default Inicio;