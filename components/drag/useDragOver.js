let lastEnter = null
let timeout = null
function debounceList (fnList, wait) {
  return (index, ...args) => {
    const context = this
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fnList[index].apply(context, args)
    }, wait)
  }
}

const useDragOver = ({ dragtype, node, dropEnterCb, dropLeaveCb }) => {
  const cbFn = debounceList([dropEnterCb, dropLeaveCb], 0)
  // 拖拽
  const dragOverProps = {
    onDragEnter: ev => {
      ev.preventDefault()
      ev.stopPropagation()
      
      if (window.DRAG_TYPE !== dragtype) return

      if (lastEnter !== ev.target) {
        lastEnter = ev.target // 记录最后进入的元素
        if (dropEnterCb) {
          cbFn(0, {type: 'enter', node}, ev)
        }
      }
    },
    onDragLeave: ev => {
      ev.preventDefault()
      ev.stopPropagation()
      
      if (window.DRAG_TYPE !== dragtype) return

      if(lastEnter === ev.target){
        lastEnter = null
        if (dropLeaveCb) {
          cbFn(1, {type: 'leave', node}, ev)
        }
      }
    }
  }

  return { dragOverProps }
}

export default useDragOver
