import Head from 'next/head'
import TopBar from '../../components/top-bar/'
import FooterBar from '../../components/footer-bar/'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <TopBar></TopBar>
    </main>

    <FooterBar></FooterBar>
  </div>
)

export default Home
