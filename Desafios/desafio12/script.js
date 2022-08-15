function validar(){
    let ano = Number(prompt('Qual é o ano que você quer verificar'))
    let res = document.getElementById('res')

    if (ano%400 == 0) {
        res.innerHTML= `O ano de ${ano} <strong><mark>É BISSEXTO</mark></strong>\u{2705}`
    } else {
        if(ano%4==0 && ano%100!=0){
        res.innerHTML= `O ano de ${ano} <strong><mark>É BISSEXTO</mark></strong>\u{2705}`
        } else {
        res.innerHTML= res.innerHTML= `O ano de ${ano} <strong><mark class="cor">NÃO É BISSEXTO</mark></strong>\u{274c}`
        }

    }
   
   
}
