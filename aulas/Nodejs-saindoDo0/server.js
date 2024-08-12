import{ createServer } from 'node:http'

const server = createServer((req,res) =>{
    console.log('oi')

    return response.end()
})

server.listenerCount(3333)
