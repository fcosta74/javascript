function desc(){
    let prod = prompt('Qual o produto que está sendo comprado?')
    let vr = Number(prompt(`Qual é o valor de ${prod}?`))
    let res = document.getElementById('res')
    porc = vr * 0.10
    soma = vr - porc
    
    res.innerHTML = `<h2>Calculando desconto de 10% para ${prod}</h2>`
    res.innerHTML += `<p>O valor original era <strong>R$ ${vr.toFixed(2)}</strong>.</p>`
    res.innerHTML += `<p>Você acaba de ganhar <strong>R$ ${porc.toFixed(2)}</strong> de desconto (-10%).</p>`
    res.innerHTML += `<p> No final, você vai pagar <strong>R$ ${soma.toFixed(2)}</strong> no produto <strong>${prod}</strong></p>`
    


    
    
}
   
   
