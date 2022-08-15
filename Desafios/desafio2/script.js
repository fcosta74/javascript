alert('Seja bem vindo ao meu projeto de estudo em javascript')
function calcular() {
    var n1 = Number(prompt(`Digite um número: `))
    var res = document.querySelector('#res')

    res.innerHTML = `<h2>O dobro de ${n1} é ${n1*2} e a metade é ${n1/2}!</h2>`

}