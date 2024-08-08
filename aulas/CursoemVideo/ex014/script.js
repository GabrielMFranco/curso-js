function carregar(){
    var infohora=document.querySelector('div#infohora')
    var foto =document.querySelector('img#foto')
    var agora = new Date() 
    var hora = agora.getHours()
    var minut= agora.getMinutes()

    infohora.innerHTML= `Agora são ${hora} e ${minut} minutos..`
    if(hora >= 0 && hora < 12){
        //bom dia
        foto.src= "imagens/manha.png"
        document.body.style.background = '#EC8349'
    }else if(hora >=12 && hora < 18){
        //boa tarde
        foto.src= "imagens/tarde.png"
        document.body.style.background = '#75ACE2'
    }else{
        //boa noite
        foto.src= 'imagens/noite.png'
        document.body.style.background = '#070E2B'
    }
} 