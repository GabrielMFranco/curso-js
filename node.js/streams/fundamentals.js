// Netflix & Spotify

// Importação de cliente via CSV (Excel)
 
//Stream =>toda entrata e saida é uma stream,le os dados aos poucos e processa enquanto o resto carrega

// Readable Streams(de leitura) / Writeble Streams(de escrita)

//process.stdin //de leitura
//    .pipe(process.stdout) //de escrita

import { Readable, Writable, Transform } from "node:stream"

class OneToHundredStream extends Readable{
    index = 1
    //toda stream Readable tem um metodo obrigatorio
    //retorna os dados dessa stream
    _read(){              
        const i = this.index++ 

        setTimeout(() =>{
            if(i > 100){
                this.push(null) // diz que não tem mais informação pra enviar
            }else{
            const buf= Buffer.from(String(i)) //só aceita buffer, então tem que converter e deixar como string pra converter como buffer
                this.push(buf)
            }
        },1000)  
    }
}

class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * - 1

        callback(null, transformed)
    }
}

class MultiplyByTenStream extends Writable{
    _write(chunk, encoding, callback){ //chunk =>pedaço lido da stream de leitura/ encoding=> Como esse informação ta codificada / callbacl=> função chamada para mostrar na tela resultado
        console.log(Number(chunk.toString())* 10)
        callback()
    }
}

new OneToHundredStream()            //stream de leitura apenas le dados
    .pipe(new InverseNumberStream())//trans..,le de um lugar e escr pra ou
    .pipe(new MultiplyByTenStream())//stream escrita,apenas escrever dados

