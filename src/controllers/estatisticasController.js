var estatisticasModel = require("../models/estatisticasModel");


function pegarEstatisticas(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        console.log('idUsuario está indefinido!')
    } else {
        estatisticasModel.pegarEstatisticas(idUsuario)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve erro ao buscar dados das KPIs! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
        );
    }
}

function leaderboard(req, res) {
    estatisticasModel.leaderboard()
        .then(
            function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve erro ao buscar dados do leaderboard! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
        );
}

module.exports = {
    pegarEstatisticas,
    leaderboard
}