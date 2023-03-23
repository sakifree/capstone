// "/api/post" - INDEX, CREATE ROUTES
import { getPosts, createPost } from "@/utils/actions"

export default async function(req, res){
    try {
        switch(req.method){
            case "GET":
                res.json(await getPosts())
                break
            case "POST":
                res.json(await createPost(req.body))
                break
            default:
                res.status(404).send("NO RESPONSE FOR THAT METHOD")
        }
    } catch (error) {
        res.status(400).json({error})
    }
}