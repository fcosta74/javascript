let vdolar = prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')

function conv(){
    let vr = Number(prompt('Quantos reais você tem na carteira?'))
    let res = document.getElementById('res')
    dolares = vr / vdolar

    res.innerHTML = `<h2>Com o valor de <strong>R$ ${vr.toFixed(2)}</strong> que você tem na carteira, você conseguirá comprar <strong>US$ ${dolares.toFixed(2)}</strong>.</h2>` 
}