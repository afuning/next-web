import style from './style.less'
const PlayButton = ({text, icon}) => (
  <div className={style.trap}>
    <button className={style.trap_button}>
      {text}
      {icon && <i className={`${icon}`}></i>}
    </button>
  </div>
)

export default PlayButton
