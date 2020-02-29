import style from './style.less'
const FooterBar = () => {
  return (
    <footer className={style['footer-container']}>
      <a target="_blank" href="http://beian.miit.gov.cn/">&copy;2020 afncn<img src="/images/beian.png" />浙ICP备20005313号</a>
    </footer>
  )
}

export default FooterBar
