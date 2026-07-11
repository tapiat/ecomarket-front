function Nosotros() {
    return (
        <div className="nosotros-page">
            <div className="nosotros-hero">
                <h1>🌿 Sobre Nosotros</h1>
                <p>Conoce nuestra historia y misión</p>
            </div>

            <section className="nosotros-mision">
                <div className="nosotros-texto">
                    <h2>Nuestra Historia</h2>
                    <p>Ecomarket Spa nació en 2020 con una misión clara: acercar los productos orgánicos y naturales a todos los hogares de Chile. Creemos que alimentarse bien no debería ser un lujo, sino un derecho.</p>
                    <p>Trabajamos directamente con agricultores locales que comparten nuestra visión de un mundo más sustentable, garantizando productos frescos, sin pesticidas y con el menor impacto ambiental posible.</p>
                </div>
                <div className="nosotros-imagen">
                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80" alt="Nosotros"/>
                </div>
            </section>

            <section className="nosotros-valores">
                <h2>Nuestros Valores</h2>
                <div className="valores-grid">
                    <div className="valor-card">
                        <div className="valor-icono">🌱</div>
                        <h3>Sustentabilidad</h3>
                        <p>Trabajamos con proveedores que respetan el medio ambiente y usan prácticas agrícolas responsables.</p>
                    </div>
                    <div className="valor-card">
                        <div className="valor-icono">💚</div>
                        <h3>Calidad</h3>
                        <p>Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad en tu mesa.</p>
                    </div>
                    <div className="valor-card">
                        <div className="valor-icono">🤝</div>
                        <h3>Comunidad</h3>
                        <p>Apoyamos a agricultores locales y promovemos una economía circular y solidaria.</p>
                    </div>
                    <div className="valor-card">
                        <div className="valor-icono">🚚</div>
                        <h3>Compromiso</h3>
                        <p>Entregamos tus pedidos frescos directamente a tu puerta, dos veces por semana.</p>
                    </div>
                </div>
            </section>

            <section className="nosotros-equipo">
                <h2>Nuestro Equipo</h2>
                <div className="equipo-grid">
                    <div className="equipo-card">
                        <div className="equipo-avatar">👨‍💼</div>
                        <h3>Carlos Rodríguez</h3>
                        <p>Fundador & CEO</p>
                    </div>
                    <div className="equipo-card">
                        <div className="equipo-avatar">👩‍💼</div>
                        <h3>María González</h3>
                        <p>Directora de Operaciones</p>
                    </div>
                    <div className="equipo-card">
                        <div className="equipo-avatar">👨‍🌾</div>
                        <h3>Pedro Soto</h3>
                        <p>Jefe de Proveedores</p>
                    </div>
                    <div className="equipo-card">
                        <div className="equipo-avatar">👩‍🍳</div>
                        <h3>Ana Martínez</h3>
                        <p>Chef & Nutricionista</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Nosotros;