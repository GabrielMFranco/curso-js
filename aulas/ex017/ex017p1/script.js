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
        if(pnum <= 0){
            window.alert('passo invalido, considerando passo = 1')
            pnum=1
        }
        if(inum > fnum){
            //contagem regressiva
            for(let c = inum; c >= fnum; c -= pnum){
                contagem.innerHTML += ` ${c}🧠 `
            }
        }else{
            //contagem crescente
            for(let c = inum; c <=fnum; c+=pnum){
                contagem.innerHTML += ` ${c}\u{1F449} ;`
            }
            
        }contagem.innerHTML +=' Fim \u{1F3C1} '
    }
}