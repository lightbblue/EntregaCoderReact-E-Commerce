# 🛒 Fake-Market E-commerce

Este proyecto es una **Single Page Application (SPA)** de comercio electrónico desarrollada con **React JS**. Simula una tienda de tecnología donde los usuarios pueden navegar por categorías, ver detalles de productos, agregarlos a un carrito de compras y finalizar la orden generando un registro en base de datos.

## 🚀 Tecnologías Utilizadas

* **React JS** - Librería principal para la UI.
* **React Router DOM** - Para la navegación sin recargas.
* **Firebase / Firestore** - Base de datos NoSQL para productos y órdenes.
* **Tailwind CSS** - Framework de estilos para un diseño moderno y responsivo.
* **Lucide React** - Iconografía.

## ✨ Funcionalidades

* **Catálogo Dinámico:** Los productos se cargan directamente desde Firebase Firestore.
* **Filtrado por Categorías:** Navegación fluida entre Celulares, Tablets, Notebooks, etc.
* **Detalle de Producto:** Vista individual con descripción, precio y control de stock.
* **Carrito de Compras:**
    * Lógica global mediante **React Context**.
    * Agregar productos (sin duplicados).
    * Eliminar items y vaciar carrito.
    * Cálculo automático de totales.
    * Persistencia de datos durante la navegación.
* **Checkout:** Formulario de validación de datos y generación de órdenes de compra en Firebase con ID único de seguimiento.

## 🛠️ Instalación y Puesta en Marcha

Sigue estos pasos para correr el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/EntregaCoderReact-E-Commerce.git](https://github.com/TU_USUARIO/EntregaCoderReact-E-Commerce.git)
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  Abre tu navegador en `http://localhost:5173`.

## 📂 Estructura del Proyecto

├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartWidget.jsx
│   │   ├── Checkout.jsx
│   │   ├── Item.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemList.jsx
│   │   ├── ItemListContainer.jsx
│   │   └── NavBar.jsx
│   ├── context/
│   │   ├── CartContext.js
│   │   └── CartProvider.jsx
│   ├── firebase/
│   │   └── config.js
│   └── services/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js


---
*Proyecto realizado para el curso de React JS de Coderhouse.*