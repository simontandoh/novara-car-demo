import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Models from '../components/Models'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vortech Motors — Precision Electric</title>
        <meta name="description" content="Vortech Motors — Zero compromise, zero emissions electric performance vehicles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, #333, transparent)' }} />
        <Features />
        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, #333, transparent)' }} />
        <Models />
      </main>
      <Footer />
    </>
  )
}
