// "/api/post/:id" - SHOW, UPDATE, DELETE ROUTES
import { getPost, updatePost, deletePost } from "@/utils/post/actions"

export default async function(req, res){
    
    const id = req.query.id

    try {
        switch(req.method){
            case "GET":
                res.json(await getPost(id))
                break
            case "PUT":
                res.json(await updatePost(id, req.body))
                break
            case "DELETE":
                res.json(await deletePost(id, req.body))
                break
            default:
                res.status(404).send("NO RESPONSE FOR THAT METHOD")
        }
    } catch (error) {
        res.status(400).json({error})
    }
}