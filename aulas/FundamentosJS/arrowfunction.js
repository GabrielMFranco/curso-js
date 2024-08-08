let dobro = function (a){
    return 2* a
}
//arrow
dobro = (a) => {
    return 2*a
}
//arrow reduvida (só pode com um unico parametro)
dobro = a => 2*a //retuns implicito
console.log(dobro(Math.PI))


//normal
let ola= function (){
    return 'olá'
}
//arrow
ola = () => 'ola'