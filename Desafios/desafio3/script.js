function iniciar(){
    let nome = prompt('Qual o seu nome?')
    let idade = prompt(`Olá, ${nome}! Quantos anos você tem?`)
    saida.innerHTML = alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}