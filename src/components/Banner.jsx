import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [


    {
        imagen: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80',
        titulo: '¡Descubre nuestra despensa orgánica & natural!',
        subtitulo: 'Todo lo orgánico y natural, directo a tu hogar.',
        btn: 'VER PRODUCTOS'
    },
    {
        imagen: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1600&q=80',
        titulo: 'Frutas y Verduras Frescas',
        subtitulo: 'Seleccionadas directamente del campo para ti.',
        btn: 'VER CATÁLOGO'
    },
    {
        imagen: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=1600&q=80',
        titulo: 'Productos Eco-Friendly',
        subtitulo: 'Cuida el planeta con cada compra que haces.',
        btn: 'CONOCE MÁS'
    }
];

function Banner() {
    const [actual, setActual] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActual(prev => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const anterior = () => setActual(prev => (prev - 1 + slides.length) % slides.length);
    const siguiente = () => setActual(prev => (prev + 1) % slides.length);

    return (
        <div className="banner">
            <div className="banner-slide" style={{
                backgroundImage: `url(${slides[actual].imagen})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="banner-overlay">
                    <h1>{slides[actual].titulo}</h1>
                    <p>{slides[actual].subtitulo}</p>
                    <Link to="/productos" className="hero-btn">{slides[actual].btn}</Link>
                </div>
            </div>

            <button className="banner-arrow left" onClick={anterior}>‹</button>
            <button className="banner-arrow right" onClick={siguiente}>›</button>

            <div className="banner-dots">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === actual ? 'activo' : ''}`}
                        onClick={() => setActual(i)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Banner;