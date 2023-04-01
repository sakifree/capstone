import { getPost, getPosts } from "@/utils/actions"
import { useRouter } from "next/router"
import { useState } from "react"

const Show = ({ post }) => {
    console.log(post)
    const router = useRouter()

    const [form, setForm] = useState({
        "title": `${post.title}`,
        "text": `${post.text}`,
        "img": `${post.img}`
    })

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
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
                    <div className="flex-wrap py-2 bg-slate-300 h-full w-full">
                        <form className="md:flex-wrap md:text-center text-center md:w-9/12 w-11/12 mx-4 my-4" onSubmit={handleUpdate}>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                        Title
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500"
                                        defaultValue={post.title}
                                        type="text"
                                        name="title"
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                        Image URL
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input 
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500"
                                        defaultValue={post.img}
                                        type="text"
                                        name="img"
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                        Text
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <textarea 
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500"
                                        defaultValue={post.text}
                                        rows="10"
                                        cols="20"
                                        type="text"
                                        name="text"
                                        onChange={handleChange}  
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                            </div>
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3"></div>
                                <div className="md:w-2/3">
                                    <input 
                                        className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                                        type="submit" 
                                        value="Update" 
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
            </div>

            <div className="mx-4 my-4">
                {/* DELETE FORM */}
                <form onSubmit={handleDelete}>
                    <input className="bg-rose-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit" value="DELETE" />
                </form>
            </div>
        </div>
    )

}

export async function getStaticPaths() {
    const posts = await getPosts()
    //console.log(posts)

    return {
        paths: posts.map(({ id }) => ({
            params: { id },
        })),
        fallback: false
    }
}

export async function getStaticProps(context) {
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