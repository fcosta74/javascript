function conv(){
    let dis = Number(prompt('Digite um adistância em metros (m)'))
    let res = document.getElementById('res')
    km = dis / 1000
    hm = dis / 100
    dam = dis * 0.10
    dm = dis * 10
    mm = dis * 100
    cm = dis * 1000
     
    res.innerHTML = `<h2>A distância de ${dis.toFixed(2)} metros, corresponde a...</h2>`
    res.innerHTML += `<p>${km.toFixed(2)} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm.toFixed(2)} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam.toFixed(2)} decâmetro (Dam)</p>`
    res.innerHTML += `<p>${dm.toFixed(2)} decímetros (dm)</p>`
    res.innerHTML += `<p>${mm.toFixed(2)} centímetros (mm)</p>`
    res.innerHTML += `<p>${cm.toFixed(2)} milímetros (mm)</p>` 
  
       
}
