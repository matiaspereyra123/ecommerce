# 🛒 Mi Ecommerce (Node.js + Express)

Proyecto personal desarrollado para practicar backend con Node.js y Express, aplicando conceptos de arquitectura y manejo de estado.

🔗 Repositorio: https://github.com/matiaspereyra123/ecommerce

---

## 🚀 ¿Qué hace este proyecto?

Aplicación de ecommerce básica que permite:

* Ver listado de productos
* Ver detalle de cada producto
* Agregar productos al carrito
* Incrementar y disminuir cantidades
* Eliminar productos del carrito
* Visualizar el total de la compra

---

## 🧰 Tecnologías utilizadas

* Node.js
* Express.js
* EJS (motor de plantillas)
* HTML / CSS
* method-override

---

## 🧱 Estructura del proyecto

```
/controllers
  - carritoController.js
  - productosController.js
  - paginasController.js

/routes
  - carritoRoutes.js
  - productosRoutes.js
  - paginasRoutes.js

/data
  - productos.json
  - store.js

/views
  - vistas EJS

/public
  - archivos estáticos (CSS, imágenes)
```

---

## 🧠 Conceptos aplicados

* Arquitectura MVC básica
* Separación de responsabilidades (routes / controllers)
* Manejo de estado en memoria con `store.js`
* Uso de method-override para métodos HTTP (DELETE)
* Renderizado dinámico con EJS
* Manejo de parámetros (`req.params`) y formularios (`req.body`)

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:

```
git clone https://github.com/matiaspereyra123/ecommerce.git
```

2. Instalar dependencias:

```
npm install
```

3. Ejecutar el servidor:

```
node app.js
```

4. Abrir en el navegador:

```
http://localhost:3000
```

---

## 📓 Proceso de desarrollo

Podés ver el paso a paso del desarrollo en el archivo DEVLOG.md

## 📌 Próximas mejoras

* Implementar sesiones (carrito por usuario)
* Persistencia en base de datos
* Autenticación de usuarios
* Mejoras en la interfaz de usuario

---

## 📖 Notas

Este proyecto fue desarrollado con fines de aprendizaje para afianzar conceptos de desarrollo backend y organización de código en aplicaciones reales.

