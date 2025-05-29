var conquistasModel = require("../models/conquistasModel");

function receberConquistas(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        console.log('ID do usuário está indefinido!')
    } else {
        conquistasModel.receberConquistas(idUsuario)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve erro ao buscar dados das conquistas! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
        );
    }
}

module.exports = {
    receberConquistas
}