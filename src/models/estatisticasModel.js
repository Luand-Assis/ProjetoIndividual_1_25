var database = require("../database/config");


function pegarEstatisticas(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pegarEstatisticas():", idUsuario);

    var instrucaoSql = `
            select 
                round(avg(tempo_segundos)) as tempo,
                round(avg(qtd_erros)) as erros,
                max(pontuacao) as pontos,
                count(idPartida) as partidas
            from tb_partidas p join tb_usuarios u 
            on p.idUsuario = u.idUsuario 
            where p.idUsuario = ${idUsuario};
            `
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
}

function leaderboard() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function leaderboard():",);

    var instrucaoSql = `
            select 
                nickname, 
                max(pontuacao) as pontuacao 
            from TB_Usuarios u join TB_Partidas p 
            on u.idUsuario = p.idUsuario 
            group by nickname 
            order by max(pontuacao) desc
            limit 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pegarEstatisticas,
    leaderboard
}