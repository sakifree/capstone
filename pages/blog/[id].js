import { getPost, getPosts } from "@/utils/post/actions"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const Show = ({post}) => {

    const router = useRouter()

    const [form, setForm] = useState({
        "title": `${post.title}`,
        "text": `${post.text}`,
        "img": `${post.img}`
    })

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleUpdate = async (event) => {
        event.preventDefault()
        await fetch(`/api/post/${post._id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        router.reload(window.location.pathname)
    }

    const handleDelete = async (event) => {
        event.preventDefault()
        await fetch(`/api/post/${post._id}`, {
            method: "delete"
        })
        
        router.push("/")
    }

    return (
        <div>
            <Link href="/"><button>Home</button></Link>
            <h1>{post.title} Page</h1>
            <p>{post.text}</p>
            <form onSubmit={handleUpdate}>
                <input defaultValue={post.title} type="text" name="title" onChange={handleChange} />
                <input defaultValue={post.text} type="text" name="text" onChange={handleChange} />
                <input type="submit" value={`Update ${post.title}`} />
            </form>

            <form onSubmit={handleDelete}>
                <input type="submit" value={`Delete ${post.title}`} /> 
            </form>
        </div>
    )

} 

export async function getStaticPaths(){
    const posts = await getPosts()
    //console.log(posts)

    return {
        paths: posts.map(({ id }) => ({
            params: { id },
        })),
        fallback: false
    }
}

export async function getStaticProps(context){
    const { params } = context
    //console.log(context)

    const id = params.id
    //console.log(id)

    const post = JSON.parse(JSON.stringify(await getPost(id)))
    //console.log(post)

    return {
        props: {
            post
        }
    }
}


export default Show