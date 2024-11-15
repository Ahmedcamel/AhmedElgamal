import Head from 'next/head'
import Header from '@/app/components/Header'
import HomePage from '@/app/components/HomePage'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dalya Baron | Astronomy</title>
        <meta name="description" content="Dalya Baron: a graduate student at the Tel Aviv University Astrophysics Department. Interested in galaxy evolution, Active Galactic Nuclei, and machine learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header/> */}
      <main>
        <HomePage/>
      </main>
      {/* <Footer/> */}
    </div>
  )
}
