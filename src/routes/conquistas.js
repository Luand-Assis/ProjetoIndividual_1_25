var express = require("express");
var router = express.Router();

var conquistasController = require("../controllers/conquistasController");

router.get("/receberConquistas/:idUsuario", function(req, res) {
    conquistasController.receberConquistas(req, res)
});

module.exports = router;