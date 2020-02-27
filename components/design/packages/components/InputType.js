import React, { useRef } from 'react'
import style from '../style.less'
import { debounce } from '../utils'
const InputType = ({ value, label, tip, onChangeText }) => {
  const inputEl = useRef(null)

  const onInput = debounce(()=> {
    onChangeText(inputEl.current.value)
  }, 800)

  return (
    <React.Fragment>
      <div className={style.label}>{label}<span className={style.tip}>&nbsp;{tip}</span></div>
      <div>
        <input
          defaultValue={value}
          onChange={onInput}
          className={style.input_line}
          ref={inputEl}
          type="text"
        />
      </div>
    </React.Fragment>
  )
}

export default InputType
