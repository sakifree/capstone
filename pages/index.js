import { getPosts } from "@/utils/actions"
import Link from "next/link"

export default function Home({posts}) {
  //console.log(posts)

   return (
    <>
      <div className="flex-wrap justify-center md:flex my-4">
        {posts.map((post) => (
          <div key={post._id} className="max-w-md bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 mx-4 md:w-1/2">
            <div className="md:flex">
               <div className="md:shrink-0">
                  <img className="h-48 w-full object-cover md:h-full md:w-48" src={post.img} alt={post.title} />
              </div>
              <div className="p-8 overflow-hidden">
                <Link href={`/blog/${encodeURIComponent(post._id)}`}>
                  <h1 className="uppercase block mt-1 text-lg leading-tight font-semibold text-black hover:no-underline hover:text-sky-500">{post.title}</h1>
                </Link>
                  <p className="mt-2 text-white truncate">{post.text}</p>
            </div>
          </div>
        </div>
        ))}
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