import { getPost, getPosts } from "@/utils/actions"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import Popup from "reactjs-popup"

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
        <div className="flex-wrap">
            <span className="flex justify-center text-5xl my-2">
                <h1>{post.title}</h1>
            </span>
            <div className="flex md:w-full md:justify-center">
                <img className="w-full md:h-96 md:w-80" src={post.img} alt={post.title} />
            </div>
            <span>
                <p>{post.text}</p>
            </span>
            <div className="mx-4 my-4">
                <Popup trigger={<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> UPDATE </button>}
                    position="right center">
                    <div className="flex-wrap">
                        <form className="md:flex-wrap md:w-1/2 w-11/12 mx-4 my-4 bg-slate-400 md:block rounded-md" onSubmit={handleUpdate}>
                            <input className=" text-blue-400 mx-4 my-4" defaultValue={post.title} type="text" name="title" onChange={handleChange} />
                            <textarea className="mx-4 my-4" defaultValue={post.text} rows="10" cols="20" type="text" name="text" onChange={handleChange} />
                            <input className="mx-4 my-4" defaultValue={post.img} type= "text" name="img" onChange={handleChange} />
                            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value={"UPDATE"} />
                        </form>
                     </div>
                </Popup>
            </div>
            <div className="mx-4 my-4">
                <form onSubmit={handleDelete}>
                    <input className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit" value={"DELETE"} /> 
                </form>
            </div>
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