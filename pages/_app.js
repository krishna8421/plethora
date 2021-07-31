import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Plethora</title>
          <meta name="description" content="An “IT and Cyber Consultancy Institute" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp