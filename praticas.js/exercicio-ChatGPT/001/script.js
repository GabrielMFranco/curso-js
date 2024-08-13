const usuarios = [
    {nome:"Chili",idade:60,email:"Chilidentes@guild.com",ativa:false},
    {nome:"Masker",idade:30,email:"Maskeremo@guild.com",ativa:true},
    {nome:"Jeso",idade:7,email:"jesoofera@guild.com",ativa:false},
    {nome:"Thai",idade:15,email:"Thailand@guild.com",ativa:true},
];

function ativos(){
    console.log(usuarios.filter(usuarios => usuarios.ativa))
}
// ativos()

function idade(){
    console.log(usuarios.slice().sort((a,b) => a.idade - b.idade))
}
//idade()

