import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Head>
        <title>Ecommerce Website</title>
      </Head>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default Home