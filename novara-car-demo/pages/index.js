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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet" />
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
