var express = require('express');
var router = express.Router();
const ProductController = require("../infraestructura/controllers/products.controller")
const productosController = new ProductController()

router.post("/", productosController.checkTicket)
router.get("/verify/:ticket", productosController.verifyTicket)

module.exports = router