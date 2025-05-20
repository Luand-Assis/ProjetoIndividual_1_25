var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/dadosPartida", function (req, res) {
    medidaController.dadosPartida(req, res);
})

module.exports = router;