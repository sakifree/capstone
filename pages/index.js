import { getPosts } from "@/utils/actions"
import Link from "next/link"

export default function Home({posts}) {
  //console.log(posts)

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <Link href={`/blog/${encodeURIComponent(post._id)}`}>
              <h1>{post.title}</h1>
              <img src={post.img}  alt={post.title} />
            </Link>
            <p>{post.text}</p>
          </div>
        ))}
        <Link href="/new"><button>New Post</button></Link>
      </div>
    </>
  )
}

export async function getServerSideProps(context){
  const posts = JSON.parse(JSON.stringify(await getPosts()))
  //console.log(posts)

  return {
    props: {
      posts
    }
  }
}