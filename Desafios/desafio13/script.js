function validar(){
    let vr1 = Number(prompt('Qual o preço anterior do produto'))
    let vr2 = Number(prompt('Qual o preço atual do produto'))
    let res = document.getElementById('res')

    dif1 = vr2 - vr1
    dif2 = vr1 - vr2
    por1 = dif2 / vr2 * 100
    por2 = dif1 / vr1 * 100

    let valorAtual1 = vr1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    let valorAtual2 = vr2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    let difAtual1 = dif1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    let difAtual2 = dif2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    
    if (valorAtual1 < valorAtual2){
        res.innerHTML = '<h1>Analisando os valores informados...</h1>'
        res.innerHTML += `<p>O produto custava ${valorAtual1} e agora custa ${valorAtual2}.</p>`  
        res.innerHTML += '<p>Hoje o produto está mais caro.</p>'
        res.innerHTML += `<p>O preço subiu ${difAtual1} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${por2.toFixed(2)}% pra cima.</p>`
    } else {
        res.innerHTML = '<h1>Analisando os valores informados...</h1>'
        res.innerHTML += `<p>O produto custava ${valorAtual1} e agora custa ${valorAtual2}.</p>`  
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        res.innerHTML += `<p>O preço caiu ${difAtual2} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${por1.toFixed(2)}% pra baixo.</p>`
    }
   
   
}
