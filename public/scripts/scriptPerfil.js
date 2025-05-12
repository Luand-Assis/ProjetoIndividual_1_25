function sair() {
    window.location = 'login.html'
}
function play() {
    window.location = 'memory-card.html'
}
function dashboard() {
  alert('Em breve.')
}

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
}