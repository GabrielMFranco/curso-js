let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length ==0) {
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tam = valores.length
        let ord = valores.sort()
        let men = valores.sort()[0]
        let mai = ord[ord.length-1]
        let soma = ord.reduce(function(accumulator, value){
            return accumulator + value
        },0);
        console.log(soma)
        let med = soma/tam
       

        res.innerHTML += `<p>Temos ${tam} elementos</p>`
        res.innerHTML +=`<p>O menor número é o ${men} </p> `
        res.innerHTML +=`<p>O maior número é o ${mai} </p> `
        res.innerHTML += `<p>A soma entre os números é ${soma}</p>`
        res.innerHTML += `<p>A média dos números é ${med}</p>`
    }
}
  

