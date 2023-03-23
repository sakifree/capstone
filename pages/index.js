import { getPosts } from "@/utils/actions"

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
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