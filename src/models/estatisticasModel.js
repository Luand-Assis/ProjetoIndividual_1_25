var database = require("../database/config");


function pegarEstatisticas(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pegarEstatisticas():", idUsuario);

    var instrucaoSql = `
            SELECT 
                ROUND(AVG(tempo_segundos)) AS tempo,
                ROUND(AVG(qtd_erros)) AS erros,
                MAX(pontuacao) AS pontos,
                COUNT(idPartida) AS partidas
            FROM TB_Partidas p JOIN TB_Usuarios u 
            ON p.idUsuario = u.idUsuario 
            WHERE p.idUsuario = ${idUsuario};
            `
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
}

function leaderboard() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function leaderboard():",);

    var instrucaoSql = `
            SELECT 
                nickname, 
                MAX(pontuacao) AS pontuacao 
            FROM TB_Usuarios u JOIN TB_Partidas p 
            ON u.idUsuario = p.idUsuario 
            GROUP BY nickname 
            ORDER BY MAX(pontuacao) DESC
            LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function grafico1(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function grafico1():", idUsuario);

    var instrucaoSql = `
            SELECT
                qtd_erros AS graph_erros,
                tempo_segundos AS graph_tempo
            FROM TB_Partidas
            WHERE idUsuario = ${idUsuario}
            ORDER BY idPartida DESC
            LIMIT 6;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pegarEstatisticas,
    leaderboard,
    grafico1
}