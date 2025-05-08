// ----- ARMAZANDO VALORES CADASTRO/LOGIN -----
var nicknameVar = "";
var emailVar = "";
var senhaVar = "";
var senhaConfirmarVar = "";

var validacao_1 = false;
var validacao_2 = false;
var validacao_3 = false;
var validacao_4 = false;

// ----- BOTÕES DO HEADER -----
function paginaLogin() {
    window.location = 'login.html';
}
function paginaCadastro() {
    window.location = 'cadastro.html';
}
function paginaIndex() {
    window.location = 'index.html';
}

// ----- VERIFICAÇÃO DO USERNAME -----
function verifyUsername() {
senhaVar = inputUsername.value;
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
emailVar = inputEmail.value;
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
senhaVar = inputPassword.value;
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
senhaConfirmarVar = inputPasswordConfirm.value;
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
        
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // crie um atributo que recebe o valor recuperado aqui
              // Agora vá para o arquivo routes/usuario.js
              nicknameServer: nicknameVar,
              emailServer: emailVar,
              senhaServer: senhaVar
            }),
          }).then(function (resposta) {
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
              cardErro.style.display = "block";
    
              divMensagemErro.innerHTML =
                `Erro ao criar novo pinguim! <br>Tente novamente.`;
    
              setTimeout(() => {
                window.location = "login.html";
              }, "2000");
    
              limparFormulario();
              finalizarAguardar(); 
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
              }
            })
            .catch(function (resposta) {
              console.log(`#ERRO: ${resposta}`);
              finalizarAguardar();
            });

        // alert('Novo pinguim cadastrado com sucesso!')
        // window.location = 'login.html';
        return false;
    }
    // } else {
    //     divErro.innerHTML = `<div id="divMensagemErro">Erro ao criar novo pinguim! <br>Tente novamente.</div> `;
    //     // divMensagemErro.innerHTML = `Erro ao criar novo pinguim! <br>Tente novamente.`;
    // }
}