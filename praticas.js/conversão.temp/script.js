let ftemp = document.querySelector('input#ftemp')
let ctemp = document.querySelector('input#ctemp')

    
function converterc(){
    if(ftemp.value== ''){
        window.alert('Digite um número para converter.')
    }else {
        let fresp = (ftemp.value* 9/5) + 32 
        document.querySelector('input#ctemp').value = fresp
        ctemp.style.color ="red";
        ftemp.style.color ="black"; 
    }
}
function converterf(){
    if(ctemp.value== ''){
        window.alert('Digite um número para converter.')
    }else{
        ctemp.innerHTML = ''  
        let cresp = (ctemp.value - 32) * 5/9
        document.querySelector('input#ftemp').value = cresp
        ftemp.style.color ="red";
        ctemp.style.color ="black";
    }
}
