function tratarErroELancar(erro){
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function gritado(obj){
    try{   //se der erro, vai direcionar pro catch
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){  
        tratarErroElancar(e) //executa a função la pra cima
    }finally{
        console.log('final')
    }
}
const obj = {nome: 'Toguro'}
gritado(obj)