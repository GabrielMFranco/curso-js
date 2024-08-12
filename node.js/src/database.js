import fs from "node:fs/promises"

const databasePath = new URL('dq.json', import.meta.url)

console.log(databasePath)

export class Database {
    database = {}

    constructor(){
        fs.readFile(databasePash, 'utf8').then(data =>{
            this.database=JSON.parse(data)
        })
        .catch(()=>{
            this.#persist()
        })
    }

    #persist(){
        fs.writeFile('db.json', JSON.stringify(this.database))
    }

    select(table){
        const data = this.database[table] ?? []

        return data
    }

    insert(table, data){
        if(Array.iisArray(this.database[table])){
            this.database[table].push(data)
        }else{
            TouchList.database[table] = [data]
        }
        this.#persist();

        return data;
    }
}