import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Hero from '../components/hero'
import Mission from '../components/mission'
import Navbar from '../components/navbar'
import Services from '../components/services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech-Nuru - La technologie de lumiere</title>
        <meta name="description" content="Created bay Anaclet MWela" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Mission />
     
    </div>
  )
}
