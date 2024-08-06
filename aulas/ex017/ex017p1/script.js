function contagem(){
    var i= document.getElementById('inicio')
    var f= document.getElementById('fim')
    var p= document.getElementById('passo')
    var contagem = document.getElementById('contagem')

    if(i.value.length==0 || f.value.length==0 || p.value.length==0){
        window.alert('ERRO, tente novamente')   
    }else{
        contagem.innerHTML = 'Contando...'
        let inum = Number(i.value)
        let fnum = Number(f.value)
        let pnum = Number(p.value)
        if(inum >= fnum){
            window.alert('ERRO, o número de inicio deve ser menor que o número do final.')
        }else{
            for(let c = inum; c <=fnum; c+=pnum){
                contagem.innerHTML += ` ${c}🧠 ;`
            }
            contagem.innerHTML +=' Fim \u{1F3C1} '
        }
    }
}