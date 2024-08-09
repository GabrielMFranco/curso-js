function estação(){
    var mes = prompt('Digite o nome do mês: ') 
    var res = document.querySelector('div#res')
    var estação = ''
switch(mes.toUpperCase()){
    case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': case'1': case '2': case '3':
        estação = 'VERÃO'
        document.body.style.background= 'lightcoral';
        break
    case 'ABRIL': case 'MAIO': case 'JUNHO':case '4':case '5':case '6':
        estação = 'OUTONO'
        document.body.style.background= '#F0E348';
        break
    case 'JULHO': case 'AGOSTO': case 'SETEMBRO':case '7':case '8':case '9':
        estação = 'INVERNO'
        document.body.style.background= 'lightblue';     
        break
    case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':case '10':case '11':case '12':
        estação = 'PRIMAVERA'
        document.body.style.background= 'lightgreen';
        break
    default:
        estação = " irreconhecído"
        document.body.style.background= 'white';
        break
    }res.innerHTML = `<p>Mês: ${mes} é ${estação}</p>`
}

