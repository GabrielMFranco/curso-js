import{ createServer } from 'node:http'

const server = createServer(() =>{
    console.log('oi')
})

server.listenerCount(3333)
