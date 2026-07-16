# 🌿 Ecomarket Spa — Frontend

Frontend de la plataforma de e-commerce de productos orgánicos y sustentables, desarrollado con React y Vite.

## 🚀 Tecnologías
- React 18 + Vite
- React Router DOM
- Axios
- Context API (Auth, Carrito, Favoritos)
- CSS personalizado responsive

## ✨ Funcionalidades
- 🛒 Carrito de compras con sidebar deslizable
- 👤 Registro e inicio de sesión con sidebar
- ❤️ Sistema de favoritos
- 🔍 Búsqueda y filtro de productos por categoría
- 🎠 Banner carrusel automático
- 🥗 Recetas saludables con modal interactivo
- 🏷️ Página de ofertas con descuentos
- 📬 Formulario de contacto
- 🌱 Catálogo con más de 30 productos orgánicos

## 📁 Estructura
src/
├── components/     # Banner, CarritoSidebar, LoginSidebar
├── context/        # AuthContext, CartContext, FavoritosContext
├── pages/          # Inicio, Productos, Ofertas, Recetas, Nosotros, Contacto
└── services/       # api.js (conexión con backend)
## ⚙️ Cómo ejecutar

### Prerequisitos
- Node.js 18+
- Backend corriendo en `http://localhost:8080`

### Instalación
```bash
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173`

## 🔗 Repositorios relacionados
- **Backend:** [ecomaket](https://github.com/tapiat/ecomaket) — Spring Boot + MySQL
