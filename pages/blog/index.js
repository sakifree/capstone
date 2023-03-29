import { getPosts } from "@/utils/actions"
import Link from "next/link"

const Index = ({posts}) => {
  //console.log(posts)

  return (
    <>
      <div>
        {posts.map((post) => (
          // <div key={post._id}>
          //   <Link href={`/blog/${encodeURIComponent(post._id)}`}>
          //     <h1>{post.title}</h1>
          //     <img src={post.img}  alt={post.title} />
          //   </Link>
          //   <p>{post.text}</p>
          // </div>
          <div key={post._id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
               <div class="md:shrink-0">
                  <img className="h-48 w-full object-cover md:h-full md:w-48" src={post.img} alt={post.title} />
              </div>
              <div className="p-8 overflow-hidden">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.title}</div>
                 <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{post.title}</a>
                 <p className="mt-2 text-slate-500">{post.text}</p>
            </div>
          </div>
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

export default Index