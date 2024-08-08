let num = [5,8,6,4,1]

console.log(`nosso vetor é o ${num}`) 
console.log(`Nosso penultimo elemento é o ${num[3]}`)
console.log(`nosso vetor tem ${num.length} elementos.`)
console.log(`nosso vetor em order crescente: ${num.sort()}`)

num.push(10)
console.log(`Adicionando um número no fim do vetor ${num}`)

//vetores na tela
let valores = [10,15,17,22]
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
// outro modo é: 
let val = [30,33,35,39]
for(let lug in val){
    console.log(`A posição ${lug} tem o valor ${val[lug]}`)
}

//procurando vetor:
let numero = [1,3,6,9]
let posicao = numero.indexOf(6)
console.log(`O valor 6 esta na posição ${posicao}`)