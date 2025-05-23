   function menu() {
        window.location = 'menu.html'
    }

    function pegarEstatisticas() {
        var idUsuario = sessionStorage.getItem('ID_USUARIO');
        
        fetch(`/medidas/pegarEstatisticas/${idUsuario}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(function (resposta) {
            console.log(resposta);
    
            if (resposta.ok) {
              console.log('Busquei os dados das KPIs', resposta)
              return resposta.json();
            } else {
              throw "Erro ao buscar dados no data base";
            }
          })
          .then(function (exibirDados) {
            console.log(exibirDados)
            tempo.innerHTML = exibirDados[0].tempo;
            erros.innerHTML = exibirDados[0].erros;
            pontuacao.innerHTML = exibirDados[0].pontos;
            qtdPartidas.innerHTML = exibirDados[0].partidas;
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
    }