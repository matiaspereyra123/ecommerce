# 📓 DEVLOG - Proyecto Ecommerce (Node.js + Express)

Registro de avances, problemas y aprendizajes durante el desarrollo del proyecto.

---

## 🟢 Etapa 1 — Base del proyecto

### ✔ Implementación inicial

* Creación del servidor con Express
* Renderizado de productos desde un archivo JSON
* Uso de EJS como motor de vistas

### 🧠 Aprendizaje

* Cómo funciona Express
* Diferencia entre rutas (`app.get`) y vistas

---

## 🟢 Etapa 2 — Carrito básico

### ✔ Funcionalidades

* Agregar productos al carrito
* Uso de `POST /carrito`
* Manejo de datos desde formularios (`req.body`)

### ⚠ Problema

* El carrito solo agregaba productos sin controlar duplicados

### 💡 Solución

* Buscar si el producto ya existe en el carrito
* Si existe → sumar cantidad
* Si no existe → crear nuevo item

### 🧠 Aprendizaje

* Uso de `.find()` para buscar elementos en arrays
* Lógica de acumulación de cantidades

---

## 🟢 Etapa 3 — Cantidades dinámicas

### ✔ Implementación

* Cambio de checkbox por input de cantidad
* Posibilidad de agregar múltiples unidades de un producto

### 🧠 Aprendizaje

* Diferencia entre selección simple vs cantidad
* Manejo de arrays desde el frontend

---

## 🟢 Etapa 4 — Funciones del carrito (CRUD completo)

### ✔ Funcionalidades agregadas

* ➕ Sumar producto (`/carrito/sumar/:id`)
* ➖ Restar producto (`/carrito/restar/:id`)
* 🗑 Eliminar producto (`DELETE /carrito/:id`)

### ⚠ Problema

* Al restar, el producto quedaba con cantidad 0

### 💡 Solución

* Si cantidad == 1 → eliminar producto
* Si cantidad > 1 → restar

### 🧠 Aprendizaje

* Lógica condicional aplicada a negocio real
* Manejo correcto de estados en arrays

---

## 🟢 Etapa 5 — Problema con referencia de arrays

### ⚠ Problema importante

Se usaba:

```js
carrito = carrito.filter(...)
```

Esto rompía la referencia al array compartido.

### 💡 Solución

```js
carrito.length = 0;
carrito.push(...nuevo);
```

### 🧠 Aprendizaje clave

* Diferencia entre modificar vs reemplazar arrays
* Importancia de referencias en JavaScript

---

## 🟢 Etapa 6 — Modularización (arquitectura)

### ✔ Refactor realizado

Se separó el proyecto en:

* controllers
* routes
* data (store.js)

### 📁 Estructura

/controllers
/routes
/data

### 🧠 Aprendizaje

* Separación de responsabilidades
* Diferencia entre:

  * routes → definen endpoints
  * controllers → contienen la lógica

---

## 🟢 Etapa 7 — Uso de Router

### ⚠ Problema

Se intentó usar:

```js
app.get("/ruta", router)
```

### 💡 Solución

```js
app.use("/", router)
```

### 🧠 Aprendizaje

* `app.get` espera una función
* `app.use` permite montar routers completos

---

## 🟢 Etapa 8 — Organización por dominios

### ✔ Controllers creados

* carritoController
* productosController
* paginasController

### 🧠 Aprendizaje

* Agrupar por dominio, no por página
* Evitar un controller por cada vista

---

## 🟢 Etapa 9 — Git y control de versiones

### ✔ Acciones realizadas

* Inicialización del repositorio
* Uso de commits semánticos:

  * feat
  * refactor
  * chore

### ⚠ Problema

Error al hacer push:

```text
failed to push because branch is behind
```

### 💡 Solución

```bash
git pull origin main
git push
```

### 🧠 Aprendizaje

* Diferencia entre repo local y remoto
* Uso de merge y sincronización

---

## 🟢 Etapa 10 — README profesional

### ✔ Mejora realizada

* Descripción clara del proyecto
* Funcionalidades
* Tecnologías
* Estructura
* Próximas mejoras

### 🧠 Aprendizaje

* Importancia del README en portfolio
* Cómo comunicar un proyecto

---

## 🟡 Estado actual del proyecto

✔ Ecommerce funcional
✔ Carrito completo (sumar, restar, eliminar)
✔ Arquitectura organizada
✔ Código modular
✔ Proyecto versionado en GitHub

---

## 🔜 Próximo paso

### 🔥 Implementar sesiones

Problema actual:

* El carrito es global

Objetivo:

* Carrito por usuario usando sessions (`express-session`)

---

## 🧠 Aprendizaje general

Durante el desarrollo:

* Se pasó de código monolítico a arquitectura modular
* Se entendió el flujo completo de una aplicación backend
* Se resolvieron problemas reales de lógica y estructura
* Se adquirieron bases sólidas de Express y Node.js

---

## 💬 Nota personal

Este proyecto marca el paso de “aprender a programar” a “construir aplicaciones reales”.
