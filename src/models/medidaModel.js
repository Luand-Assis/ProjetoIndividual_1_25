var database = require("../database/config");

function dadosPartida(idUsuario, erros, tempo, pontuacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dadosPartida():", idUsuario, erros, tempo, pontuacao);

    var instrucaoSql = `
            INSERT INTO TB_Partidas VALUES (default, ${idUsuario}, ${erros}, ${tempo}, ${pontuacao});
        `;
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

function achievement1(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function achievement1():", idUsuario)

    var instrucaoSql = `
            INSERT INTO TB_UsuarioConquista (idConquista, idUsuario) VALUES (1, ${idUsuario});
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    ;
}

function achievement2(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function achievement2():", idUsuario);

    var instrucaoSql = `
            INSERT INTO TB_UsuarioConquista (idConquista, idUsuario) VALUES (2, ${idUsuario});
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function achievement3(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function achievement3():", idUsuario);

    var instrucaoSql = `
            INSERT INTO TB_UsuarioConquista (idConquista, idUsuario) VALUES (3, ${idUsuario});
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

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

function buscarUltimasMedidas(idAquario, limite_linhas) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    dadosPartida,
    achievement1,
    achievement2,
    achievement3,
    pegarEstatisticas,
    leaderboard,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
