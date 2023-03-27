import { User } from "@/utils/models/user";
import { dbconnection } from "@/utils/connection";
import handler from "@/utils/handler";

handler
    .post(createUser)

async function createUser(req, res){
    const data = req.body
    const { email, password } = data

    dbconnection()
    
    const user = await User.create(req.body)
    res.status(201).json({ message: "Created user!" })
}

export default handler