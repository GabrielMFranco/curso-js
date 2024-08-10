var comp = ''
var player = ''

function gerar(){
    var min = 1
    var max = 100
    var dif = max - min
    var randomic = Math.random()
    var comp= min + Math.trunc(dif * randomic)
}
function jogo(){
    player = Number(window.prompt('Qual é seu palpite?'))
    if(player < comp){
        res.innerHTML += '<p> Chute um número maior</p>'  
    }else if(player > comp){
        res.innerHTML += "<p>Chute um número menor</p>"
    }else if(player == comp){      
        res.innerHTML += '<p>Você acertou</p>'
         document.getElementById('botao').style.visibility = 'hidden'
        
    }   
}

