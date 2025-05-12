// ----- ARMAZANDO VALORES CADASTRO/LOGIN -----
var username = "";
var email = "";
var passwd = "";
var passwdConfirm = "";

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

// ----- VAR PARA ARMAZENAR A COR DO PINGUIM SELECIONADO -----
var cor = 1

// ----- DEFININDO AS CORES DOS PINGUINS -----
function pinguimAzul() {
    div_pinguimCor.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_1.png')";
    cor = 1
}

function pinguimPreto() {
    div_pinguimCor.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_2.png')";
    cor = 2;
}

function pinguimAmarelo() {
    div_pinguimCor.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_3.png')";
    cor = 3;
}

function pinguimLaranja() {
    div_pinguimCor.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_4.png')";
    cor = 4;
}

function pinguimVerde() {
    div_pinguimCor.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_5.png')";
    cor = 5;
}

function pinguimVermelho() {
    div_pinguimCor.style.backgroundImage = "url('./assets/ColorPenguin/pinguim_6.png')";
    cor = 6;
}

// ----- CADASTRAR -----
function cadastrar() {
    // Verificando se alguem campo não está validado
    if (
        validacao_1 == false ||
        validacao_2 == false ||
        validacao_3 == false ||
        validacao_4 == false
    ) {
        divErro.innerHTML = `<div id="divMensagemErro">Erro ao criar novo pinguim! <br>Tente novamente.</div> `;
    } else {
        divErro.innerHTML = '';

        var nicknameVar = username;
        var corVar = cor;
        var emailVar = email;
        var senhaVar = passwd;
        
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nicknameServer: nicknameVar,
                corServer: corVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            }),
        })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
              alert('Novo pinguim cadastrado com sucesso!')
              console.log('enviado para o backend')
              
              setTimeout(() => {
                window.location = "login.html";
              }, "1000");
    
              limparFormulario();
              finalizarAguardar();
            } else {
              throw "Erro ao criar seu pinguim!";
            }
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
          });
    
        return false;
      }
        // window.location = 'login.html';
}

function entrar() {
        var nicknameVar = inputUsername.value;
        var emailVar = inputEmail.value;
        var senhaVar = inputPassword.value;

        if (
            nicknameVar == "" ||
            emailVar == "" ||
            senhaVar == ""
        ) {
            divErroLogin.innerHTML = `<div class="Erro"><h4><u>Erro</u></h4>
                    <p>Seu login de pinguim está incorreto</p></div>`;
            return false;
        }

        console.log("FORM NICKNAME: ", nicknameVar);
        console.log("FORM EMAIL: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nicknameServer: nicknameVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.NICKNAME_USUARIO = json.nickname;
                    sessionStorage.COR_USUARIO = json.corPinguim;
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.AQUARIOS = JSON.stringify(json.aquarios)

                    alert('Login efetuado com sucesso!')
                    setTimeout(function () {
                        window.location = "./menu.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {
                divErroLogin.innerHTML = `<div class="Erro"><h4><u>Erro</u></h4>
                    <p>Seu login de pinguim está incorreto</p></div>`;

                console.log("Houve um erro ao tentar realizar o login!");
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
}