   function menu() {
        window.location = 'menu.html'
    }

    window.onload = () => {
      leaderboard()
      pegarEstatisticas()
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

    function leaderboard() {
      fetch(`/medidas/leaderboard`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(function (resposta) {
            console.log(resposta);
    
            if (resposta.ok) {
              console.log('Busquei os dados do leaderboard', resposta)
              return resposta.json();
            } else {
              throw "Erro ao buscar dados no data base";
            }
          })
          .then(function (leaderboard) {
            console.log(leaderboard)
            jogador1.innerHTML = leaderboard[0].nickname;
            pontos1.innerHTML = leaderboard[0].pontuacao;
            jogador2.innerHTML = leaderboard[1].nickname;
            pontos2.innerHTML = leaderboard[1].pontuacao;
            jogador3.innerHTML = leaderboard[2].nickname;
            pontos3.innerHTML = leaderboard[2].pontuacao;
            jogador4.innerHTML = leaderboard[3].nickname;
            pontos4.innerHTML = leaderboard[3].pontuacao;
            jogador5.innerHTML = leaderboard[4].nickname;
            pontos5.innerHTML = leaderboard[5].pontuacao;
            jogador6.innerHTML = leaderboard[5].nickname;
            pontos6.innerHTML = leaderboard[5].pontuacao;
            jogador7.innerHTML = leaderboard[6].nickname;
            pontos7.innerHTML = leaderboard[6].pontuacao;
            jogador8.innerHTML = leaderboard[7].nickname;
            pontos8.innerHTML = leaderboard[7].pontuacao;
            jogador9.innerHTML = leaderboard[8].nickname;
            pontos9.innerHTML = leaderboard[8].pontuacao;
            jogador10.innerHTML = leaderboard[9].nickname;
            pontos10.innerHTML = leaderboard[9].pontuacao;
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
    }