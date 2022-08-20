function checar(){
    let aluno = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Primeira nota de ${aluno}`))
    let n2 = Number(prompt(`Segunda nota de ${aluno}`))
    
    res.innerHTML = document.querySelector('res')
    media = (n1 + n2) / 2
    res.innerHTML = `<h2>Analisando a situação de ${aluno}...</h2>`
    res.innerHTML += `<p>Com as notas ${n1} e ${n2} a <strong>média é ${media}</strong>.</p>`
    
    if (media > 6) {
        res.innerHTML +='Com a média acima de 6,0, o aluno está <strong><mark class="apr">APROVADO</mark></strong>.'
    
    } else if (media >= 3.0 && media <= 6.00){
        res.innerHTML +='Com a média entre 3,0 e 6,0, i aluno está em <strong><mark class="rec">RECUPERAÇÃO</mark></strong>.'
    
    } else {
        res.innerHTML +='Com média abaixo de 3,0, o aluno está <strong><mark class="rep">REPROVADO</mark></strong>.'
        
    }
}


