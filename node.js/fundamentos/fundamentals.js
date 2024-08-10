// Netflix & Spotify

// Importação de cliente via CSV (Excel)
 
//Stream => le os dados aos poucos e processa enquanto o resto carrega

// Readable Streams(de leitura) / Writeble Streams(de escrita)

//process.stdin //de leitura
//    .pipe(process.stdout) //de escrita

import { Readable } from "node:stream"

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
            const buf= Buffer.from(String(i)) //só aceita buffer, então tem que converter e deixar como string
                this.push(buf)
            }
        },1000)  
    }
}
new OneToHundredStream()
    .pipe(process.stdout)







