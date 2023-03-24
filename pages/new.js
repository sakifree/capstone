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
        setForm({...form, [event.target.name]: event.target.value})
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
        <form onSubmit={handleSubmit}>
            <label>Title</label>
                <input type="text" name="title" value={form.title} onChange={handleChange} />
            <label>Text</label>
                <input type="text" name="text" value={form.text} onChange={handleChange} />
            <label>Image</label>
                <input type="text" name="img" value={form.img} onChange={handleChange} />
                <input type="submit" value="Create Post" />
        </form>
    )

}

export default New