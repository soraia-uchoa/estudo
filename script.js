aula = 12/03/2025

//variavel
const whiteGray = '#f1f5f9'
const blackGray = '#212529'

//função de manipulação de estilos
function useLighTheme() {
    document.body.style.backgroundColor = whiteGray
    document.body.style.color = blackGray 

}

function userDarkTheme() {
    document.body.style.backgroundColor = blackGray
    document.body.style.color = whiteGray
}

//adicionar os eventos
document.getElementById('lightBtn').addEventListener('click', useLighTheme)
document.getElementById('darkBtn').addEventListener('click', userDarkTheme)

