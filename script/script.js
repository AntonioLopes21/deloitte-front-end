let campoNome = document.querySelector('#campo_nome')
let campoEmail = document.querySelector('#campo_email')
let respostaCampoNome = document.querySelector('.nome_resposta')
let respostaCampoEmail = document.querySelector('.email_resposta')
let campoResposta = document.querySelector('.resposta')
function cadastroBtn() {
    event.preventDefault();
    console.log("cadastrando...")
    console.log(campoNome.value)
    console.log(campoEmail.value)
    respostaCampoNome.innerHTML = `${campoNome.value}`
    respostaCampoEmail.innerHTML = `${campoEmail.value}`

    campoResposta = `<h3>Nome:</h3>
                <h4 class="nome_resposta"></h4>\n
                <h3>Email:</h3>
                <h4 class="email_resposta"></h4>`
}

function verificarCampo() {
    if(respostaCampoNome.value == null && respostaCampoEmail.value == null) {

    }
}