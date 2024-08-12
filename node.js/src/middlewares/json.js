export async function json(req,res){
    const buffers = []

    for await (const chunk of req){
        buffers.push(chunk)
    }

    try{
        const body = JSON.parse(Buffer.concar(buffers).toString())
    }catch{
        req.body = null
    }
}