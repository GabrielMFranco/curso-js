import http from 'node:http'
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

const users = []

const server = http.createServer (async(req, res) =>{
    const{method,url} = req

   await json(req,res)

    if(method ==="GET" && url ==='/users'){
        return res
        .setHeader('Content=type', 'application/json')
        .end(JSON.stingify(users))
    }

    if (method === "POST" && url === '/users'){
        const{name, email} = req.body

        users.push({
            id: 1,
            name,
            email,
        })

        return res.writeHead(201).end()
    }
    return res.whiteHead(404).end('Rout not fund')    
})

server.listen(3333)


