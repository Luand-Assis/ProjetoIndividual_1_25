var medidaModel = require("../models/medidaModel");

function dadosPartida(req, res) {
    var idUsuario = req.body.idUsuario
    var erros = req.body.qtd_erros;
    var tempo = req.body.tempo_segundos;
    var pontuacao = req.body.pontuacao;

    if (idUsuario == undefined) {
        console.log('usuário indefinido!')
    } else if (erros == undefined) {
        console.log('quantidade de erros indefinida!')
    } else if (tempo == undefined) {
        console.log('tempo indefinido!')
    } else if (pontuacao == undefined) {
        console.log('pontuação indefinada!')
    } else {
        medidaModel.dadosPartida(idUsuario, erros, tempo, pontuacao)
        .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve erro ao enviar os dados da partida! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function achievement1(req, res) {
    var idUsuario = req.body.idUsuario;

    if (idUsuario == undefined) {
        console.log('idUsuario está indefinido!')
    } else {
        medidaModel.achievement1(idUsuario)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve erro ao enviar os dados da conquista 1! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
        );
    }
}

function achievement2(req, res) {
    var idUsuario = req.body.idUsuario;

    if (idUsuario == undefined) {
        console.log('idUsuario está indefinido!')
    } else {
        medidaModel.achievement2(idUsuario)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve erro ao enviar os dados da conquista 2! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
        );
    }
}

function achievement3(req, res) {
    var idUsuario = req.body.idUsuario;

    if (idUsuario == undefined) {
        console.log('idUsuario está indefinido!')
    } else {
        medidaModel.achievement3(idUsuario)
        .then(
            function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve erro ao enviar os dados da conquista 3! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
        );
    }
}

module.exports = {
    dadosPartida,
    achievement1,
    achievement2,
    achievement3
}