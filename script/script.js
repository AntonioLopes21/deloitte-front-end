let campoNome = document.querySelector('#campo_nome')
let campoEmail = document.querySelector('#campo_email')
let respostaCampoNome = document.querySelector('.nome_resposta')
let respostaCampoEmail = document.querySelector('.email_resposta')
let campoResposta = document.querySelector('.resposta')
function cadastroBtn() {
    event.preventDefault();

    const listaCadastrosNomes = [];
    const listaCadastroEmails = [];

    console.log("cadastrando...")
    console.log(campoNome.value)
    console.log(campoEmail.value)
    respostaCampoNome.innerHTML = `${campoNome.value}`
    respostaCampoEmail.innerHTML = `${campoEmail.value}`

    //futura implementação de lista
    //listaCadastrosNomes.push(campoNome.value)
    //listaCadastroEmails.push(campoEmail.value)
}

function verificarCampo() {
    if(respostaCampoNome.value == null && respostaCampoEmail.value == null) {

    }
}

