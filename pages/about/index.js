import CommonHead from '../../components/common-head'
import TopBar from '../../components/top-bar/'
import FooterBar from '../../components/footer-bar/'

const About = () => (
  <div className="about">
    <CommonHead title="关于我们" />

    <main>
      <TopBar></TopBar>
    </main>

    <FooterBar></FooterBar>
  </div>
)

export default About
