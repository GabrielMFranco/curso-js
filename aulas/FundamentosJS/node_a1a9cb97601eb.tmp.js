const pessoa = {
    saudacao:'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()  //conflito entre paradigma: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //bind amarra um determinado objeto para ser o dono da execução quando chamado
falarDePessoa()

//exemplo 2

function Ser(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    },1000)
}
new Ser