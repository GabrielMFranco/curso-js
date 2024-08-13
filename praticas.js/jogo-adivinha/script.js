var comp = ''
var player = ''

function gerar(){
    var alea = Math.floor(Math.random()*100);
    comp = alea + 1
}
function jogo(){
    gerar()
    player = Number(window.prompt('Qual é seu palpite?'))
    if(player < comp){
        res.innerHTML += `<p>${player} Chute um número maior</p>`
    }else if(player > comp){
        res.innerHTML += `<p>${player} Chute um número menor</p>`
    }else{      
        res.innerHTML += `<p>${player} Você acertou</p>`
         document.getElementById('botao').style.visibility = 'hidden'
        
    }   
}

