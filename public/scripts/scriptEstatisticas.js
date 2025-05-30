   function menu() {
        window.location = 'menu.html'
    }

    window.onload = () => {

      nome_usuario.innerHTML = sessionStorage.NICKNAME_USUARIO;

        if (sessionStorage.COR_USUARIO == '1') {
            img_pinguim.style.backgroundImage = "url('../assets/ColorPenguin/pinguim_1.png')"
        } else if (sessionStorage.COR_USUARIO == '2') {
            img_pinguim.style.backgroundImage = "url('../assets/ColorPenguin/pinguim_2.png')"
        } else if (sessionStorage.COR_USUARIO == '3') {
            img_pinguim.style.backgroundImage = "url('../assets/ColorPenguin/pinguim_3.png')"
        } else if (sessionStorage.COR_USUARIO == '4') {
            img_pinguim.style.backgroundImage = "url('../assets/ColorPenguin/pinguim_4.png')"
        } else if (sessionStorage.COR_USUARIO == '5') {
            img_pinguim.style.backgroundImage = "url('../assets/ColorPenguin/pinguim_5.png')"
        } else if (sessionStorage.COR_USUARIO == '6') {
            img_pinguim.style.backgroundImage = "url('../assets/ColorPenguin/pinguim_6.png')"
        }

      leaderboard()
      pegarEstatisticas()
      grafico1()
      grafico2()
    }

    function pegarEstatisticas() {
        var idUsuario = sessionStorage.getItem('ID_USUARIO');
        
        fetch(`/estatisticas/pegarEstatisticas/${idUsuario}`, {
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

            if (exibirDados[0].tempo == null) {
              tempo.innerHTML = 'Sem Partidas'
            } else {
              tempo.innerHTML = exibirDados[0].tempo;
            }

            if (exibirDados[0].erros == null) {
              erros.innerHTML = 'Sem Partidas'
            } else {
              erros.innerHTML = exibirDados[0].erros;
            }

            if (exibirDados[0].pontos == null) {
              pontuacao.innerHTML = 'Sem Partidas'
            } else {
              pontuacao.innerHTML = exibirDados[0].pontos;
            }

            qtdPartidas.innerHTML = exibirDados[0].partidas;

          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
    }

    function leaderboard() {
      fetch(`/estatisticas/leaderboard`, {
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
            pontos5.innerHTML = leaderboard[4].pontuacao;
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