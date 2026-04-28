const express = require("express");
const router = express.Router();


const carritoController = require("../controllers/carritoController");

router.get("/carrito",carritoController.mostrarCarrito);
router.post("/carrito",carritoController.agregarAlCarrito);
router.post("/carrito/sumar/:id",carritoController.sumar);
router.post("/carrito/restar/:id",carritoController.restar );
router.delete("/carrito/:id",carritoController.eliminar);


module.exports = router;

