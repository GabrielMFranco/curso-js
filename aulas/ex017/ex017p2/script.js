function gerar(){
    let ndig = document.querySelector('input#num')
    let res = document.querySelector('select#tab')
    if(ndig.value.length ==0){
        alert('Favor digitar o número.')
    }else{
        let num = Number(ndig.value)
        let mul = 1
        res.innerHTML= ''

        while(mul <= 10){
            let item = document.createElement('option')
            item.text =`${num} x ${mul} = ${num*mul}`
            res.appendChild(item)
            mul+=1

        }        
    }   
}
/*for(c = num; c < fim; c*=mul){
            res.innerHTML +=` ${num} x ${mul} = ${val} `
            val = num * mul
            mul+=1
        }*/