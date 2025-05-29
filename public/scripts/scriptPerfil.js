function sair() {
    window.location = 'login.html'
}
function play() {
    window.location = 'memory-card.html'
}
function dashboard() {
  window.location = 'estatisticas.html'
}

var conquista1 = false;
var conquista2 = false;
var conquista3 = false;

window.onload = () => {
    nickname.innerHTML = sessionStorage.NICKNAME_USUARIO;
    email.innerHTML = sessionStorage.EMAIL_USUARIO;

    if (sessionStorage.COR_USUARIO == '1') {
        imagemPinguim.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_1.png')"
    } else if (sessionStorage.COR_USUARIO == '2') {
        imagemPinguim.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_2.png')"
    } else if (sessionStorage.COR_USUARIO == '3') {
        imagemPinguim.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_3.png')"
    } else if (sessionStorage.COR_USUARIO == '4') {
        imagemPinguim.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_4.png')"
    } else if (sessionStorage.COR_USUARIO == '5') {
        imagemPinguim.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_5.png')"
    } else if (sessionStorage.COR_USUARIO == '6') {
        imagemPinguim.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_6.png')"
    }

    receberConquistas()
}

function exibir(exibirDesc) {
    exibirDesc.querySelector('.descricao').style.display = 'flex';
}
function ocultar(esconder) {
    esconder.querySelector('.descricao').style.display = 'none '
}

function receberConquistas() {
    var idUsuario = sessionStorage.getItem('ID_USUARIO');

    fetch(`/conquistas/receberConquistas/${idUsuario}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(function (resposta) {
            console.log(resposta);
    
            if (resposta.ok) {
              console.log(`Capturei as conquistas do usuário ${idUsuario}`, resposta)
              return resposta.json();
            } else {
              throw "Erro ao buscar dados no data base";
            }
          })
          .then(function (conquistas) {
            console.log(conquistas)
            
            for (var i = 0; i < conquistas.length; i++) {
                var conquista_atual = conquistas[i].idConquista;

                if (conquista_atual == 1) {
                    conquista1 = true;
                }
                if (conquista_atual == 2) {
                    conquista2 = true;
                }
                if (conquista_atual == 3) {
                    conquista3 = true
                }
            }

            if (conquista1) {
                document.getElementById('conquista1').style.backgroundImage = "url('../assets/achievements/achievement1.png')"
            }

            if (conquista2) {
                document.getElementById('conquista2').style.backgroundImage = "url('../assets/achievements/achievement2.png')"
            }

            if (conquista3) {
                document.getElementById('conquista3').style.backgroundImage = "url('../assets/achievements/achievement3.png')"
            }

            })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
}