import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async (req, res) => {
    const session = await getServerSession(req, res, authOptions)

    if (session){
        res.send({
            content: "Protected content; you can access becaus you are signed in.",
        })
    } else {
        res.send({
            error: "Must be signed in to view protected content on this page.",
        })
    }
}