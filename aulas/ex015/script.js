function verificar(){
    var data= new Date()
    var ano=data.getFullYear()
    var fano = document.querySelector("input#data")
    var res = document.querySelector('div#resultado')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var sexof = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img= document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexof[0].checked){
            gênero="Homem"
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src', 'imagens/jovem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else{
            gênero="Mulher"
            if(idade >=0 && idade < 10){
                //criança
            }else if(idade <21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }
        res.style.textAlign='center'
        resultado.innerHTML = `Detectamos um ${gênero} com ${idade} anos.`
        res.appendChild('img')
    }
    
}  