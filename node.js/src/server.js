import http from 'node:http'
import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { json } from './middlewares/json.js'


// - Criar usuários
// - Listagem usuarios
// - Edição de usuários
// -Remoção de usuarios

// -HTTP 
// -Método HTTP
// -URL

// GET = Buscar um recurso do back-end
// POST = Cria um recurso no Back-END
// PUT = Edita um recurso no back-end
// PATCH = Edita um recurso especifico no back-end
// Delete = Deleta um recurso no back-end 

// Stateful(salva em memoria) - Stateless(salva em aplicativo de texto,banco de dacos...)

// JSON= JavaScript Object Notation - conseguimos representar array, objetos, bollean, float...

//Cabeçalhos (requisição/resposta) => Metadados

// http Status Code (simboliza se deu certo ou se deu errado e dando motivos)

const database = new database()

const server = http.createServer (async(req, res) =>{
    const{method,url} = req

   await json(req,res)

    if(method ==="GET" && url ==='/users'){
        const users = dabatase.select('users')

        return res.end(JSON.stringify(users))
    }

    if (method === "POST" && url === '/users'){
        const{name, email} = req.body

        const user ={
            id: randomUUID(),
            name,
            email,
        }

        database.insert('users',user)

        return res.writeHead(201).end()
    }
    return res.whiteHead(404).end('Rout not fund')    
})

server.listen(3333)


