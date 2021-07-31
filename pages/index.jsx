import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import NavBar from "../components/NavBar"
import hackerHome from '../public/HackerImg.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
        <Head>
          <title>Plethora | Home</title>
        </Head>
        <NavBar />
        <div className={styles.cardMain}>
          <div className={styles.quote}>
            <h1>UNLEASH YOUR POTENTIAL</h1>
            <p>Hacking involves a different way of looking at problems that no one&apos;s thought of.</p>
          </div>

          <Image src={hackerHome} alt=""/>
        </div>
        
    </>
  )
}