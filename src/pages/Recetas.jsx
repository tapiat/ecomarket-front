import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const recetas = [
    {
        id: 1,
        nombre: 'Ensalada Verde Detox',
        tiempo: '15 min',
        porciones: 2,
        imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
        ingredientes: [
            '2 tazas de espinaca fresca',
            '1 palta madura',
            '1 pepino',
            '1 limón',
            '2 cdas de aceite de oliva extra virgen',
            'Sal y pimienta al gusto',
            'Semillas de sésamo'
        ],
        instrucciones: [
            'Lava bien la espinaca y sécala.',
            'Corta la palta en cubos y el pepino en rodajas.',
            'Mezcla la espinaca, palta y pepino en un bowl grande.',
            'Prepara el aderezo con jugo de limón, aceite de oliva, sal y pimienta.',
            'Vierte el aderezo sobre la ensalada y mezcla suavemente.',
            'Decora con semillas de sésamo y sirve inmediatamente.'
        ]
    },
    {
        id: 2,
        nombre: 'Bowl de Frutas Orgánicas',
        tiempo: '20 min',
        porciones: 2,
        imagen: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
        ingredientes: [
            '1 taza de granola natural',
            '1 manzana orgánica',
            '1 plátano',
            '1 taza de fresas',
            '2 cdas de miel natural',
            '1 taza de yogur natural',
            'Hojas de menta fresca'
        ],
        instrucciones: [
            'Lava y corta todas las frutas en trozos medianos.',
            'Coloca el yogur natural en la base del bowl.',
            'Agrega la granola sobre el yogur.',
            'Distribuye las frutas cortadas encima.',
            'Rocía con miel natural.',
            'Decora con hojas de menta fresca y sirve.'
        ]
    },
    {
        id: 3,
        nombre: 'Sopa de Verduras Natural',
        tiempo: '30 min',
        porciones: 4,
        imagen: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&q=80',
        ingredientes: [
            '2 zanahorias orgánicas',
            '1 trozo de zapallo',
            '2 ramas de apio',
            '1 cebolla',
            '2 dientes de ajo',
            '1 litro de caldo de verduras',
            'Sal, pimienta y orégano al gusto',
            '2 cdas de aceite de oliva'
        ],
        instrucciones: [
            'Pela y corta todas las verduras en cubos medianos.',
            'Calienta el aceite de oliva en una olla grande.',
            'Sofríe la cebolla y el ajo por 3 minutos.',
            'Agrega zanahoria, zapallo y apio, cocina 5 minutos.',
            'Vierte el caldo de verduras y lleva a ebullición.',
            'Baja el fuego y cocina 20 minutos hasta que las verduras estén tiernas.',
            'Sazona con sal, pimienta y orégano al gusto.',
            'Sirve caliente con pan integral.'
        ]
    }
];

function Recetas() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [receta, setReceta] = useState(null);

    useEffect(() => {
        if (id) {
            const found = recetas.find(r => r.id === parseInt(id));
            setReceta(found || null);
        }
    }, [id]);

    if (!id) return null;

    if (!receta) return (
        <div className="modal-overlay" onClick={() => navigate(-1)}>
            <div className="modal-contenido" onClick={e => e.stopPropagation()}>
                <p>Receta no encontrada</p>
            </div>
        </div>
    );

    return (
        <div className="modal-overlay" onClick={() => navigate(-1)}>
            <div className="modal-contenido" onClick={e => e.stopPropagation()}>
                <button className="modal-cerrar" onClick={() => navigate(-1)}>✕</button>
                <img src={receta.imagen} alt={receta.nombre} className="modal-imagen" />
                <div className="modal-body">
                    <div className="receta-meta">
                        <span>⏱ {receta.tiempo}</span>
                        <span>👥 {receta.porciones} porciones</span>
                    </div>
                    <h2>{receta.nombre}</h2>
                    <div className="receta-seccion">
                        <h3>🛒 Ingredientes</h3>
                        <ul>
                            {receta.ingredientes.map((ing, i) => (
                                <li key={i}>{ing}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="receta-seccion">
                        <h3>👨‍🍳 Preparación</h3>
                        <ol>
                            {receta.instrucciones.map((paso, i) => (
                                <li key={i}>{paso}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recetas;