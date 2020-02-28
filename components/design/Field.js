import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import Drag from '../drag'
import style from './style.less'
import { useDesign } from '../../components/design/useTreeReducer'
import { DRAG_TYPE } from './config'
const Field = ({ node, isEdit }) => {
  const { id, params } = node
  const [, dispatch] = useDesign()
  const handleDelete = (ev) => {
    ev.stopPropagation()
    dispatch({type: 'delete', id})
  }
  const handleSelect = () => dispatch({type: 'select', id})
  return (
    <Drag.Item
      dragtype={DRAG_TYPE}
      node={{componentId: params.componentId, id}}
      dragEnterCb={dispatch}
      dragLeaveCb={dispatch}
      dragEndCb={dispatch}
    >
      {({ dragProps, dragOverProps, dragRef }) => (
        <DragField params={params} onDelete={handleDelete} onSelect={handleSelect} isEdit={isEdit} dragProps={dragProps} ref={dragRef} dragOverProps={dragOverProps} />
      )}
    </Drag.Item>
  )
}

const DragField = forwardRef(({ dragProps, dragOverProps, onSelect, onDelete, isEdit, params }, parentRef) => {
  const dragRef = useRef()
  useImperativeHandle(parentRef, () => ({
    getDom: () => {
      return dragRef.current
    }
  }))
  return (
    <div
      ref={dragRef}
      dragtype={DRAG_TYPE}
      {...dragProps} {...dragOverProps}
      className={`${style.design_placeholder} ${isEdit && style.design_placeholder_select}`}
      onClick={onSelect}
    >
      <span>{params.editer.getFieldItem('label')}</span>
      <span className={style.design_placeholder_right}>{params.editer.getFieldItem('placeholder')}</span>
      <span
        className={style.design_placeholder_close}
        onClick={onDelete}
      >
        <i className="iconfont iconclose"></i>
      </span>
    </div>
  )
})

export default Field
