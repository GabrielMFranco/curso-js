const teste = "Cod3r"
//mostra qual elemento ta no indice que foi pedido
console.log(teste.charAt(3)) 

// procura indice que foi informado e fala sua posilçao
console.log(teste.indexOf('d'))

//imprime do indice que foi informado pra frente, pode add o indice final também
console.log(teste.substring(1))
console.log(teste.substring(0,3))

//concatenar
console.log('teste '.concat(teste).concat("!")) //form1
console.log('teste ' + teste + "!") //form2

console.log(teste.replace(3, 'e'))

//converter para array
console.log('Ana,Maria,Braga'.split(','))


