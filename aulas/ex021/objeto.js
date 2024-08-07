let cliente = {nome:'José',
    sexo:'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
}}
//console.log(cliente.peso)

cliente.engordar(2)
console.log(`${cliente.nome} pesa ${cliente.peso}Kg`)
