var num = Number(document.querySelector('input#inumero').value)
var res = document.getElementById('res')

function fatorial(){
    let n = num
    if(n ==1){
        res.innerHTML = 1
    }else{
        res.innerHTML = fatorial(n-1)
    }
}

