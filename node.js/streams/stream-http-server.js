import http from 'node:http'
import{Transform} from 'node:stream'

class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * - 1

        console.log(transformed)

        callback(null, Buffer.from(Sring(transformed)))
    }
}

//req => ReadableStream
//res => WritableStream

const server = http.createServer(async (req, res) =>{ //adicionar async  se usar o await
    const buffers = []

    for await (const chunk of req){//passa os dados por completo com await
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()
    console.log(fullStreamContent)
    return res.end(fullStreamContent)
})

server.listem (3334)