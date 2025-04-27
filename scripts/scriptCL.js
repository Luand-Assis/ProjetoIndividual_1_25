// ----- ARMAZANDO VALORES CADASTRO/LOGIN -----
var username = 0;
var email = 0;
var telefone = 0;
var passwd = 0;
var passwdConfirm = 0;

var validacao_1 = false;
var validacao_2 = false;
var validacao_3 = false;
var validacao_4 = false;

// ----- VERIFICAÇÃO DO USERNAME -----
function verifyUsername() {
username = inputUsername.value;
var mensagemUsername = '';

    if (username.length < 4 || username.length > 12) {
        mensagemUsername = `<span style="color: red;">Escolha um nome com no mínimo 4 letras e no máximo 12.</span>`;
        validacao_1 = false;
    } else {
        mensagemUsername = `<span style="color: green;">Nome válido</span>`
        validacao_1 = true;
    }
    divVerifyUsername.innerHTML = mensagemUsername;
};

// ----- VERIFICAÇÃO DE EMAIL -----
function verifyEmail() {
email = inputEmail.value;
var mensagemEmail = '';

    if (email.includes('@')) {
        mensagemEmail = `<span style="color: green;">Email válido.</span>`
        validacao_2 = true;
    } else {
        mensagemEmail = `<span style="color: red;">Email inválido.</span>`;
        validacao_2 = false;
    }
    divVerifyEmail.innerHTML = mensagemEmail;
};

// ----- VERIFICAÇÃO DE SENHA -----
function securityPasswd() {
passwd = inputPassword.value;
var mensagemPasswd = '';

    if (passwd.length < 8) {
        mensagemPasswd = `<span style="color: red;">A senha deve conter no mínimo 8 caracteres.<br>Incluir pelo menos 1 caractere especial.</span>`;
        validacao_3 = false;
    } else if (
        passwd.includes('!') ||
        passwd.includes('@') ||
        passwd.includes('#') ||
        passwd.includes('$') ||
        passwd.includes('%') ||
        passwd.includes('&') ||
        passwd.includes('*') ||
        passwd.includes('(') ||
        passwd.includes(')') ||
        passwd.includes('-') ||
        passwd.includes('_') ||
        passwd.includes('=') ||
        passwd.includes('+') ||
        passwd.includes('?') ||
        passwd.includes('<') ||
        passwd.includes('>')
    ) {
        mensagemPasswd = `<span style="color: green;">Senha Válida.</span>`;
        validacao_3 = true;
    } else {
        mensagemPasswd = `<span style="color: red;">Deve incluir pelo menos 1 caractere especial.</span>`
        validacao_3 = false;
    }
    divSecurityPasswd.innerHTML = mensagemPasswd;
};


function verifyPasswd() {
passwdConfirm = inputPasswordConfirm.value;
var mensagemPasswdVerify = '';

    if (passwdConfirm != passwd) {
        mensagemPasswdVerify = `<span style="color: red;">Senha incorreta.</span>`;
        validacao_4 = false;
    } else if (passwdConfirm === passwd && validacao_3 == true) {
        mensagemPasswdVerify = `<span style="color: green;">Senha válida.</span>`;
        validacao_4 = true;
    }
    divVerifyPasswd.innerHTML = mensagemPasswdVerify;
};

// ----- DEFININDO AS CORES DOS PINGUINS -----
function pinguimAzul() {
    document.getElementById("div_pinguimCor").style.backgroundImage = "url('../ColorPenguin/pinguim_1.png')";
}

function pinguimPreto() {
    document.getElementById("div_pinguimCor").style.backgroundImage = "url('../ColorPenguin/pinguim_2.png')";
}

function pinguimAmarelo() {
    document.getElementById("div_pinguimCor").style.backgroundImage = "url('../ColorPenguin/pinguim_3.png')";
}

function pinguimLaranja() {
    document.getElementById("div_pinguimCor").style.backgroundImage = "url('../ColorPenguin/pinguim_4.png')";
}

function pinguimVerde() {
    document.getElementById("div_pinguimCor").style.backgroundImage = "url('../ColorPenguin/pinguim_5.png')";
}

function pinguimVermelho() {
    document.getElementById("div_pinguimCor").style.backgroundImage = "url('../ColorPenguin/pinguim_6.png')";
}

// ----- CADASTRAR -----
function cadastrar() {
    if (
        validacao_1 == true &&
        validacao_2 == true &&
        validacao_3 == true &&
        validacao_4 == true
    ) {
        alert('Novo pinguim cadastrado com sucesso!')
        window.location = 'login.html';
    } else {
        alert('Erro')
    }
}