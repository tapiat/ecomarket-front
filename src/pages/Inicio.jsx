import { Link } from 'react-router-dom';

function Inicio() {
    return (
        <div>
            {/* Hero */}
            <section className="hero">
                <h1>🌿 Productos Orgánicos<br/>y Sustentables</h1>
                <p>Descubre nuestra selección de productos naturales, orgánicos y respetuosos con el medio ambiente.</p>
                <Link to="/productos" className="hero-btn">Ver Catálogo</Link>
            </section>

            {/* Categorías */}
            <section className="categorias">
                <h2>Nuestras Categorías</h2>
                <div className="categorias-grid">
                    <div className="categoria-card">
                        <div className="icono">🥦</div>
                        <p>Alimentos</p>
                    </div>
                    <div className="categoria-card">
                        <div className="icono">🧴</div>
                        <p>Cuidado Personal</p>
                    </div>
                    <div className="categoria-card">
                        <div className="icono">👕</div>
                        <p>Ropa</p>
                    </div>
                    <div className="categoria-card">
                        <div className="icono">🏠</div>
                        <p>Hogar</p>
                    </div>
                    <div className="categoria-card">
                        <div className="icono">🌱</div>
                        <p>Jardín</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Inicio;