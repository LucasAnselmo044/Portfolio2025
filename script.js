function enviarWpp(event) {

event.preventDefault()

const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const email = document.getElementById('email').value;
const telefone = '5581983406667'

const texto = `Olá! Me chamo ${nome}, ${mensagem}, meu email para contato: ${email}`
const msgFormatada = encodeURIComponent(texto)

const url = `https://wa.me/${telefone}/?text=${msgFormatada}`

console.log(url)

window.open(url, '_blank')
}