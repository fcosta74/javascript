function digite(){
    let prod = prompt('Que produto você está comprando?')
    let vr = Number(prompt(`Quanto o valor ${prod} que você está comprando?`))
    let din = Number(prompt(`Qual foi o valor que você deu para pagar o ${prod}`))
    saida.innerHTML = alert(`Voê comprou ${prod} que custou R$ ${vr}.
Deu R$ ${din} e vai receber R$ ${din-vr}
Volte Sempre!`)
}

    
