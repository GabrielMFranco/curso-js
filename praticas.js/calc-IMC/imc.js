var alt = document.querySelector('input#ialt')
var pes = document.querySelector('input#ipes')

function calcular(){
    res.innerHTML = ''
    if(alt.value <=10 && pes.value<=10){
        alert('Verifique os dados e tente novamente.')
    }else{
        var imc = pes.value / (alt.value*2)
        res.innerHTML += `Seu IMC é ${imc}`
        //max.length 
        //info imc
    }
    
}