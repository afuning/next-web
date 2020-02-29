import React, { useReducer, useEffect, useRef, useImperativeHandle, forwardRef, useCallback } from 'react'
import Drag from '../../../drag/'
import style from '../style.less'
import { arrayUtil, debounce } from '../utils'
const DRAG_TYPE = 'OPTIONS'

/**
 * 数据初始化
 * @param {Array} value 
 */
const initState = (value) => {
  value = value.map((item, index) => ({id: Date.now() + index, ...item}))
  return (
    {
      options: value,
      preNodeId: ''
    }
  )
}
/**
 * 
 * @param {*} state 
 * @param {Object} action { type: '', node: {id: XXX} }
 */
const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'insert':
      if (state.preNodeId && state.preNodeId !== action.node.id) {
        // 删除当前项
        arrayUtil.delete('id', action.node.id, state.options)
        // 将node插入
        let index = arrayUtil.findIndex('id', state.preNodeId, state.options)
        if (index !== -1) {
          state.options.splice(index + 1, 0, action.node)
        }
      }
      return {
        ...state,
        options: [...state.options]
      }
    case 'add':
      if (state.preNodeId) {
        let index = arrayUtil.findIndex('id', state.preNodeId, state.options)
        if (index !== -1) {
          state.options.splice(index + 1, 0, action.node)
        }
      }
      return {
        ...state,
        options: [...state.options]
      }
    case 'delete':
      return {
        ...state,
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
    case 'edit':
      let index = arrayUtil.findIndex('id', action.node.id, state.options)
      if (index !== -1)
        state.options.splice(index, 1, action.node)
      return {
        ...state,
        options: state.options
      }
    default:
      return state
  }
}
const OptionsType = ({ value, label, tip, onChange }) => {
  const [state, dispatch] = useReducer(reducer, value, initState)
  const { options } = state
  
  const handleInsert = (preNodeId) => {
    const newNode = { id: Date.now(), label: `选项${options.length + 1}` }
    dispatch({type: 'enter', node: {id: preNodeId}})
    dispatch({type: 'add', node: newNode})
  }

  const handleDelete = (id) => {
    console.log(state.options)
    if (options.length === 1) return
    dispatch({type: 'delete', node: {id}})
  }

  const handleChangeText = (id, value) => {
    dispatch({type: 'edit', node: {id, label: value}})
  }

  useEffect(() => {
    console.log(111)
  })
  useEffect(() => {
    onChange(options)
  }, [options])
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
                        handleChangeText={handleChangeText}
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

const OptionItem = React.memo(forwardRef(({ node, dragProps, dragOverProps, handleInsert, handleDelete, handleChangeText }, parentRef) => {
  const dragRef = useRef()
  const inputEl = useRef(null)

  const onInput = debounce(()=> {
    handleChangeText(node.id, inputEl.current.value)
  }, 800)

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
          ref={inputEl}
          defaultValue={node.label}
          onChange={onInput}
          className={style.input_line}
          type="text"
        />
      </div>
      <div className={style.option_action}>
        <i onClick={useCallback(() => handleDelete(node.id), [])} className={`${style.option_action_icon} iconfont iconjian`}></i>
        <i onClick={useCallback(() => handleInsert(node.id), [])} className={`${style.option_action_icon} iconfont iconjia`}></i>
      </div>
    </div>
  )
}), (prevProps, nextProps) => {
  if (prevProps.node.id !== nextProps.node.id) {
    return false
  }
  return true
})

export default React.memo(OptionsType, () => { return true })
