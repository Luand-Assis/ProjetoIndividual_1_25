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
}