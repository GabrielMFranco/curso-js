const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
let notasAltas = []
console.log(notasBaixas)


for(let i in notas){
    if(notas[i] >= 7){
        notasAltas.push(notas[i])
    }
}
console.log(notasAltas)

//Com callback]
notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)


notasAltas2 = notas.filter(function(nota){
    return nota > 7
})
console.log(notasAltas2)


//arrow
const notasBaixas3 = notas.filter(nota => nota <6)
console.log(notasBaixas3)
const notasAltas3 = notas.filter(nota => nota >=6)
console.log(notasAltas3)
