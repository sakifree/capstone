import { useRouter } from "next/router"
import { useState } from "react"

const New = (props) => {

    const router = useRouter()

    const [form, setForm] = useState({
        "title": "",
        "text": "",
        "img": ""
    })

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await fetch("api/post", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })

        router.push("/")
    }

    return (
        // <form onSubmit={handleSubmit}>
        //     <label>Title</label>
        //         <input type="text" name="title" value={form.title} onChange={handleChange} />
        //     <label>Text</label>
        //         <input type="text" name="text" value={form.text} onChange={handleChange} />
        //     <label>Image</label>
        //         <input type="text" name="img" value={form.img} onChange={handleChange} />
        //         <input type="submit" value="Create Post" />
        // </form>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Title
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="title" value={form.title} onChange={handleChange} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Image URL
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="img" value={form.img} onChange={handleChange} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Text
                    </label>
                </div>
                <div className="md:w-2/3">
                    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="text" value={form.text} onChange={handleChange} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <input className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Create Post" />
                </div>
            </div>
        </form>
    )

}

export default New