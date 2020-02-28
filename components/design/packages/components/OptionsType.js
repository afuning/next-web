import React, { useReducer, useRef, useImperativeHandle, forwardRef } from 'react'
import Drag from '../../../drag/'
import style from '../style.less'
import { arrayUtil } from '../utils'
const DRAG_TYPE = 'OPTIONS'

const initState = (value) => {
  value = value.map((item, index) => ({id: Date.now() + index, ...item}))
  return (
    {
      options: value,
      preNodeId: ''
    }
  )
}
const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'insert':
      if (state.preNodeId) {
        // 删除当前项
        arrayUtil.delete('id', action.node.id, state.options)
        // 将node插入
        let index = arrayUtil.findIndex('id', state.preNodeId, state.options)
        if (index !== -1) {
          action.node.index = index + 1
          state.options.splice(index + 1, 0, action.node)
        }
      }
      return {
        options: [...state.options]
      }
    case 'add':
      if (state.preNodeId) {
        // 将node插入
        let index = -1
        state.options.some((o, i) => {
          if (o.id === state.preNodeId) {
            index = i
            return true
          }
        })
        if (index !== -1) {
          state.options.splice(index + 1, 0, action.node)
        }
      }
      return {
        options: [...state.options]
      }
    case 'delete':
      return {
        options: state.options.filter(o => o.id !== action.node.id)
      }
    // 放置的位置
    case 'enter':
      if (action.node.id === state.preNodeId) return state
      return {
        ...state,
        preNodeId: action.node.id
      }
    // 离开放置位置
    case 'leave':
      if (action.node.id === state.preNodeId)
        return {
          ...state,
          preNodeId: ''
        }
      return state
    default:
      return state
  }
}
const OptionsType = ({ value, label, tip }) => {
  const [state, dispatch] = useReducer(reducer, value, initState)
  const { options } = state
  
  const handleInsert = (preNodeId) => {
    const newNode = { id: Date.now(), label: `选项${options.length + 1}` }
    dispatch({type: 'enter', node: {id: preNodeId}})
    dispatch({type: 'add', node: newNode})
  }

  const handleDelete = (preNodeId) => {
    if (options.length === 1) return
    dispatch({type: 'delete', node: {id: preNodeId}})
  }
  return (
    <React.Fragment>
      <div className={style.label}>{label}<span className={style.tip}>&nbsp;{tip}</span></div>
      <Drag.Container
        dragtype={DRAG_TYPE}
        dropCb={dispatch}
      >
        {({ dropProps }) => (
          <div
            {...dropProps}
          >
            {
              options.map((o, i) => (
                <Drag.Item
                  dragtype={DRAG_TYPE}
                  dragEnterCb={dispatch}
                  key={o.id}
                  node={o}
                >
                  {
                    ({ dragProps, dragRef,  dragOverProps }) => (
                      <OptionItem
                        key={o.id}
                        node={o}
                        ref={dragRef}
                        dragProps={dragProps}
                        dragOverProps={dragOverProps}
                        handleDelete={handleDelete}
                        handleInsert={handleInsert}
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

const OptionItem = forwardRef(({ node, dragProps, dragOverProps, handleInsert, handleDelete }, parentRef) => {
  const dragRef = useRef()
  useImperativeHandle(parentRef, () => ({
    getDom: () => {
      return dragRef.current
    }
  }))

  return (
    <div {...dragOverProps} ref={dragRef} className={style.option_outer}>
      <div className={style.option_container}>
        <div {...dragProps} className={style.option_drag}><i className={`${style.option_drag_icon} iconfont iconsort`}></i></div>
        <input
          defaultValue={node.label}
          className={style.input_line}
          type="text"
        />
      </div>
      <div className={style.option_action}>
        <i onClick={() => handleDelete(node.id)} className={`${style.option_action_icon} iconfont iconjian`}></i>
        <i onClick={() => handleInsert(node.id)} className={`${style.option_action_icon} iconfont iconjia`}></i>
      </div>
    </div>
  )
})

export default OptionsType
