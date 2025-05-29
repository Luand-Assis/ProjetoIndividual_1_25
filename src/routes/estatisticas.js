var express = require("express");
var router = express.Router();

var estatisticasController = require("../controllers/estatisticasController");

router.get("/pegarEstatisticas/:idUsuario", function(req, res) {
    estatisticasController.pegarEstatisticas(req, res);
})

router.get("/leaderboard", function(req, res) {
    estatisticasController.leaderboard(req, res);
})

module.exports = router;