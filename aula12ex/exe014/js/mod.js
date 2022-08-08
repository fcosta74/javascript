function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = "imagem/fotomanha.png"
        document.body.style.background = '#FBB266'
    } else if (hora >= 12 && hora < 18){
        img.src = "imagem/fototarde.png"
        document.body.style.background = '#924B2C'
    } else {
        img.src = "imagem/fotonoite.png"
        document.body.style.background = '#515154'
        
    }   
}