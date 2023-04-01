import 'tailwindcss/tailwind.css'
import Nav from '@/components/Nav'
import Head from 'next/head'

export default function App({ Component, pageProps: {session, ...pageProps} }) {
  
  return (
    <>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
          <title>LockdIn</title>
          <meta name="description" contents="This is a blog social media site." />
      </Head>
      <Nav/>
      <Component {...pageProps} />
    </>
  )
}
