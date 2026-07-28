import { useState } from 'react';

function Contacto() {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
        setForm({ nombre: '', email: '', telefono: '', mensaje: '' });
    };

    return (
        <div className="contacto-page">
            <div className="contacto-hero">
                <h1>📬 Contáctanos</h1>
                <p>Estamos aquí para ayudarte</p>
            </div>

            <div className="contacto-contenido">
                <div className="contacto-info">
                    <h2>¿Cómo podemos ayudarte?</h2>
                    <p>Escríbenos y te responderemos a la brevedad. También puedes encontrarnos en nuestras redes sociales.</p>

                    <div className="contacto-datos">
                        <div className="contacto-dato">
                            <span>📧</span>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:contacto@ecomarket.cl">contacto@ecomarket.cl</a>
                            </div>
                        </div>
                        <div className="contacto-dato">
                            <span>📍</span>
                            <div>
                                <h4>Dirección</h4>
                                <a href="https://maps.google.com/?q=Santiago,Chile" target="_blank" rel="noreferrer">Santiago, Chile</a>
                            </div>
                        </div>
                        <div className="contacto-dato">
                            <span>📞</span>
                            <div>
                                <h4>Teléfono</h4>
                                <a href="tel:+56912345678">+56 9 1234 5678</a>
                            </div>
                        </div>
                        <div className="contacto-dato">
                            <span>💬</span>
                            <div>
                                <h4>WhatsApp</h4>
                                <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer">Escríbenos</a>
                            </div>
                        </div>
                    </div>

                    <div className="contacto-redes">
                        <h4>Síguenos en redes</h4>
                        <div className="redes-iconos">
                            <a href="#">📘 Facebook</a>
                            <a href="#">📸 Instagram</a>
                            <a href="#">▶️ YouTube</a>
                            <a href="#">💬 WhatsApp</a>
                        </div>
                    </div>
                </div>

                <div className="contacto-formulario">
                    <h2>Envíanos un mensaje</h2>

                    {enviado && (
                        <div className="contacto-exito">
                            ✅ ¡Mensaje enviado! Te responderemos pronto.
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
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
                            <label>Mensaje</label>
                            <textarea
                                name="mensaje"
                                placeholder="¿En qué podemos ayudarte?"
                                value={form.mensaje}
                                onChange={handleChange}
                                rows="5"
                                required
                            />
                        </div>
                        <button type="submit" className="btn-auth">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto;