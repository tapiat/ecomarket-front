import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

function Inicio() {
    return (
        <div>
            <Banner />

            <section className="bienvenida">
                <div className="bienvenida-texto">
                    <h2>Bienvenidos a Ecomarket</h2>
                    <p>Somos una tienda de productos orgánicos y naturales, con una amplia línea pensada especialmente para ti, donde podrás encontrar los más variados productos que van desde frutas, verduras y alimentos hasta productos eco sustentables.</p>
                    <div className="bienvenida-checks">
                        <div className="check-item">✅ <span>Productos Orgánicos</span></div>
                        <div className="check-item">✅ <span>Eco-friendly</span></div>
                        <div className="check-item">✅ <span>Frescos y Naturales</span></div>
                        <div className="check-item">✅ <span>Directo a tu hogar</span></div>
                    </div>
                    <Link to="/productos" className="btn-conocenos">CONÓCENOS</Link>
                </div>
                <div className="bienvenida-logo">
                    <div className="logo-circular">
                        <span>🌿</span>
                        <p>Ecomarket</p>
                        <small>Orgánico & Natural</small>
                    </div>
                </div>
            </section>

            <section className="categorias">
                <h2>Nuestras Categorías</h2>
                <div className="categorias-grid">
                    <Link to="/productos?categoria=Alimentos" className="categoria-card">
                        <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&q=80" alt="Alimentos"/>
                        <p>Alimentos</p>
                    </Link>
                    <Link to="/productos?categoria=Cuidado Personal" className="categoria-card">
                        <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&q=80" alt="Cuidado Personal"/>
                        <p>Cuidado Personal</p>
                    </Link>
                    <Link to="/productos?categoria=Ropa" className="categoria-card">
                        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&q=80" alt="Ropa"/>
                        <p>Ropa</p>
                    </Link>
                    <Link to="/productos?categoria=Hogar" className="categoria-card">
                        <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&q=80" alt="Hogar"/>
                        <p>Hogar</p>
                    </Link>
                    <Link to="/productos?categoria=Jardín" className="categoria-card">
                        <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=80" alt="Jardín"/>
                        <p>Jardín</p>
                    </Link>
                </div>
            </section>

            <section className="destacados">
                <h2>Ofertas De La Semana</h2>
                <div className="destacados-grid">
                    <div className="destacado-card">
                        <div className="destacado-badge">OFERTA</div>
                        <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80" alt="Manzanas"/>
                        <h3>Manzanas Orgánicas</h3>
                        <div className="destacado-precios">
                            <span className="precio-tachado">$3.990</span>
                            <span className="precio-oferta">$2.990</span>
                        </div>
                        <Link to="/productos" className="btn-comprar-dest">Comprar</Link>
                    </div>
                    <div className="destacado-card">
                        <div className="destacado-badge">OFERTA</div>
                        <img src="https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&q=80" alt="Palta"/>
                        <h3>Palta Hass</h3>
                        <div className="destacado-precios">
                            <span className="precio-tachado">$4.990</span>
                            <span className="precio-oferta">$3.990</span>
                        </div>
                        <Link to="/productos" className="btn-comprar-dest">Comprar</Link>
                    </div>
                    <div className="destacado-card">
                        <img src="https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=400&q=80" alt="Shampoo"/>
                        <h3>Shampoo Natural</h3>
                        <div className="destacado-precios">
                            <span className="precio-oferta">$8.990</span>
                        </div>
                        <Link to="/productos" className="btn-comprar-dest">Comprar</Link>
                    </div>
                    <div className="destacado-card">
                        <img src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80" alt="Aceite"/>
                        <h3>Aceite de Oliva</h3>
                        <div className="destacado-precios">
                            <span className="precio-oferta">$12.990</span>
                        </div>
                        <Link to="/productos" className="btn-comprar-dest">Comprar</Link>
                    </div>
                </div>
            </section>

            <section className="como-funciona">
                <h2>¿Cómo Funcionamos?</h2>
                <div className="pasos-grid">
                    <div className="paso">
                        <div className="paso-icono">🛒</div>
                        <h3>1. Elige tus productos</h3>
                        <p>Navega nuestro catálogo y agrega lo que necesitas al carrito.</p>
                    </div>
                    <div className="paso">
                        <div className="paso-icono">📋</div>
                        <h3>2. Realiza tu pedido</h3>
                        <p>Completa tu compra de forma segura y sencilla.</p>
                    </div>
                    <div className="paso">
                        <div className="paso-icono">📦</div>
                        <h3>3. Preparamos tu pedido</h3>
                        <p>Seleccionamos los mejores productos frescos para ti.</p>
                    </div>
                    <div className="paso">
                        <div className="paso-icono">🚚</div>
                        <h3>4. Despachamos</h3>
                        <p>Enviamos tu pedido los miércoles y viernes a tu hogar.</p>
                    </div>
                    <div className="paso">
                        <div className="paso-icono">😊</div>
                        <h3>5. ¡Disfruta!</h3>
                        <p>Recibe productos frescos y orgánicos en tu puerta.</p>
                    </div>
                </div>
            </section>

            <section className="recetas">
                <h2>Recetas Saludables</h2>
                <p className="recetas-subtitulo">Inspírate con nuestras recetas usando productos orgánicos</p>
                <div className="recetas-grid">
                    <div className="receta-card">
                        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" alt="Ensalada"/>
                        <div className="receta-info">
                            <span className="receta-tiempo">⏱ 15 min</span>
                            <h3>Ensalada Verde Detox</h3>
                            <p>Espinaca, palta, pepino y limón con aderezo de aceite de oliva extra virgen.</p>
                            <Link to="/recetas/1" className="receta-link">Ver receta →</Link>
                        </div>
                    </div>
                    <div className="receta-card">
                        <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80" alt="Bowl"/>
                        <div className="receta-info">
                            <span className="receta-tiempo">⏱ 20 min</span>
                            <h3>Bowl de Frutas Orgánicas</h3>
                            <p>Mezcla de frutas frescas con granola y miel natural para un desayuno perfecto.</p>
                            <Link to="/recetas/2" className="receta-link">Ver receta →</Link>
                        </div>
                    </div>
                    <div className="receta-card">
                        <img src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400&q=80" alt="Sopa"/>
                        <div className="receta-info">
                            <span className="receta-tiempo">⏱ 30 min</span>
                            <h3>Sopa de Verduras Natural</h3>
                            <p>Caldo nutritivo con zanahoria, zapallo y apio orgánico ideal para el invierno.</p>
                            <Link to="/recetas/3" className="receta-link">Ver receta →</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="suscripcion">
                <h2>🌿 ¡Suscríbete y obtén 10% de descuento!</h2>
                <p>Recibe ofertas exclusivas, recetas y novedades directamente en tu correo.</p>
                <div className="suscripcion-form">
                    <input type="email" placeholder="Ingresa tu email..." id="emailSuscripcion" />
                    <button onClick={() => {
                        const email = document.getElementById('emailSuscripcion').value;
                        if (email) {
                            alert('¡Gracias por suscribirte! 🌿 Recibirás un 10% de descuento en tu próxima compra.');
                            document.getElementById('emailSuscripcion').value = '';
                        } else {
                            alert('Por favor ingresa tu email.');
                        }
                    }}>Suscribirme</button>
                </div>
            </section>
        </div>
    );
}

export default Inicio;