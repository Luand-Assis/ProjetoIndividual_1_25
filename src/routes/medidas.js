var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/dadosPartida", function (req, res) {
    medidaController.dadosPartida(req, res);
})

router.post("/achievement1", function (req, res) {
    medidaController.achievement1(req, res);
})

router.post("/achievement2", function (req, res) {
    medidaController.achievement2(req, res);
})

router.post("/achievement3", function (req, res) {
    medidaController.achievement3(req, res);
})

router.get("/pegarEstatisticas/:idUsuario", function(req, res) {
    medidaController.pegarEstatisticas(req, res);
})

module.exports = router;