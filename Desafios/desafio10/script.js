function desc(){
    let nome = prompt('Qual é o nome do funcionário?')
    let sal = Number(prompt(`Qual é o salário de ${nome}?`))
    let porc = Number(prompt(`O salário de ${nome} vai ser reajustado em porcetagem?`))
    let res = document.getElementById('res')

    aumento = (sal * porc) / 100
    vrf = sal + aumento

    let salAtual= sal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    let aumentoAtual= aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    let vrfAtual= vrf.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});   

    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
    res.innerHTML += `<p>O salário atual de <strong>${nome}</strong> era R$ <strong>${salAtual}</strong>.</p>`
    res.innerHTML += `<p>Com um aumento de <strong>${porc}%</strong>, o salário vai aumentar R$ <strong>${aumentoAtual}</strong> no próximo mês.</p>`
    res.innerHTML += `<p>A partir daí, ${nome} vai passar a ganhar R$ <strong>${vrfAtual}</strong>.</p>`
    
    
}

