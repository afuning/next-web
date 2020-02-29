import CommonHead from '../../components/common-head/'
import FooterBar from '../../components/footer-bar/'
import PlayButton from '../../components/index/play-button'
import style from './style.less'
const Home = () => (
  <div className="container">
    <CommonHead title="AFUNING首页" />

    <main className={style.index_main}>
      <div className={style.index_avator}><img src="/images/avator.jpeg" title="看我干嘛？" /></div>
      <p className={style.index_text}>HELLO! STRANGER</p>
      <div className={style.index_button}>
        <PlayButton text="Enter MENU" icon="iconfont iconenter" />
      </div>
    </main>

    <FooterBar></FooterBar>
  </div>
)

export default Home
