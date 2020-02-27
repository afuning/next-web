import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import Drag from '../../../drag/'
import style from '../style.less'
const DRAG_TYPE = 'OPTIONS'
const OptionsType = ({ value, label, tip }) => {
  return (
    <React.Fragment>
      <div className={style.label}>{label}<span className={style.tip}>&nbsp;{tip}</span></div>
      <Drag.Container>
        {({ dropProps }) => (
          <div
            {...dropProps}
          >
            {
              value.map((o, i) => (
                <Drag.Item dragtype={DRAG_TYPE} key={i} node={''}>
                  {
                    ({ dragProps, dragRef }) => (
                      <OptionItem
                        key={i}
                        label={o.label}
                        ref={dragRef}
                        dragProps={dragProps}
                      ></OptionItem>
                    )
                  }
                </Drag.Item>
              ))
            }
          </div>
        )}
      </Drag.Container>
    </React.Fragment>
  )
}

const OptionItem = forwardRef(({ label, dragProps }, parentRef) => {
  const dragRef = useRef()
  useImperativeHandle(parentRef, () => ({
    getDom: () => {
      return dragRef.current
    }
  }))
  return (
    <div ref={dragRef} className={style.option_outer}>
      <div className={style.option_container}>
        <div {...dragProps} className={style.option_drag}><i className={`${style.option_drag_icon} iconfont iconsort`}></i></div>
        <input
          defaultValue={label}
          className={style.input_line}
          type="text"
        />
      </div>
      <div className={style.option_action}>
        <i className={`${style.option_action_icon} iconfont iconjian`}></i>
        <i className={`${style.option_action_icon} iconfont iconjia`}></i>
      </div>
    </div>
  )
})

export default OptionsType
