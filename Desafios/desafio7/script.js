
function conv(){
    let dis = Number(prompt('Digite uma temperatura em °C (Celsius).'))
    let res = document.getElementById('res')
    k = dis + 273.15
    f = ((dis*9) / 5)+ 32
    
    res.innerHTML = `<h2>A distância de ${dis}°C, corresponde a...</h2>`
    res.innerHTML += `<p>${k.toFixed(2)} °K (Kelvin)</p>`
    res.innerHTML += `<p>${f.toFixed(2)} °F (Fahrenheit)</p>`
       
}

    
  
