import Head from 'next/head'
import TopBar from '../../components/top-bar/'
import FooterBar from '../../components/footer-bar/'

const About = () => (
  <div className="about">
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

export default About
