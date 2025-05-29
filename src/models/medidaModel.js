var database = require("../database/config");

function dadosPartida(idUsuario, erros, tempo, pontuacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function dadosPartida():", idUsuario, erros, tempo, pontuacao);

    var instrucaoSql = `
            INSERT INTO TB_Partidas VALUES (default, ${idUsuario}, ${erros}, ${tempo}, ${pontuacao});
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

module.exports = {
    dadosPartida,
    achievement1,
    achievement2,
    achievement3
}
