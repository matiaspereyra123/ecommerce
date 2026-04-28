
const express = require("express");
const router = express.Router();
const paginasController= require("../controllers/paginasController");

router.get("/contacto",paginasController.contacto);
router.get("/sobre",paginasController.sobreMi);

module.exports=router;