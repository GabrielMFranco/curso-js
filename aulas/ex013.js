var agora= new Date()
var diasem= agora.getDay()
// domingo(0),segunda(1),terça(2)...
console.log(diasem)
switch(diasem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('erro, dia não reconhecido')
}