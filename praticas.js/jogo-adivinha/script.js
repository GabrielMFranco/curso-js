var comp = ''
var player = ''

function gerar(){
    var alea = Math.floor(Math.random()*100)+1;
    comp = alea
}
function jogo(){
    gerar()
    player = Number(window.prompt('Qual é seu palpite?'))
    if(player < comp){
        res.innerHTML += `<p>Chute um número maior</p>`
    }else if(player > comp){
        res.innerHTML += `<p>Chute um número menor</p>`
    }else if(player == comp){      
        res.innerHTML += `<p>Você acertou</p>`
         document.getElementById('botao').style.visibility = 'hidden'
        
    }   
}

