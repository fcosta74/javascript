function calcular(){
    let a = Number(prompt('Qual é o valor de a?'))
    let b = Number(prompt('Qual é o valor de b?'))
    let c = Number(prompt('Qual é o valor de c?'))
    let res = document.getElementById('res')

    delta = b * b - 4 * a * 2
   
    res.innerHTML = `<h2>Resovendo Bhaskara</h2>`
    res.innerHTML += `<p>A equação atual é ${a}x² + ${b}x + ${c} = 0</p>`
    res.innerHTML += `<p>O cálculo realizado será Δ = ${b}² - 4 . ${a} . ${c}</p>`
    res.innerHTML += `<p>O valor calculado foi Δ = ${delta}</p>`
/*
    
    
    res.innerHTML += `<p>Com um aumento de <strong>${porc}%</strong>, o salário vai aumentar R$ <strong>${aum.toFixed(2)}</strong> no próximo mês.</p>`
    res.innerHTML += `<p>A partir daí, ${nome} vai passar a ganhar R$ <strong>${vrf.toFixed(2)}</strong>.</p>`
    */
    
}
   
   
   
