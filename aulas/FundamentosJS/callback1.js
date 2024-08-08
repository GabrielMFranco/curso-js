const fabricantes = ['Mercedes','Audi', 'BMW']
//
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)   //indice+1 adicionou o numero na frente
}
fabricantes.forEach(imprimir)
//
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
//arrow
fabricantes.forEach(fabricante => console.log(fabricante))