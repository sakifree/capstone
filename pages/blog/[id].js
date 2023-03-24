import { getPost, getPosts } from "@/utils/post/actions"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const Show = ({post}) => {

    return (
        <h1>Show Page</h1>
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