const useDrag = ({ dragtype, node, dragDom, dragStartCb, dragEndCb }) => {
  // 拖拽
  const dragProps = {
    onDragStart: ev => {
      // ev.preventDefault()
      ev.stopPropagation()
      // ev.target.style.opacity = '0.4'
      ev.dataTransfer.setData('node', JSON.stringify(node))
      ev.dataTransfer.setData('dragtype', dragtype)
      window.DRAG_TYPE = dragtype
      // ev.dataTransfer.setDragImage(image, 10, 10)
      const currentDom = dragDom && dragDom()
      currentDom.style.opacity = '0.4'
      // document.querySelector('html').classList='is_drag'
      ev.dataTransfer.setDragImage(currentDom, 20, 10)
    },
    onDragEnd: ev => {
      ev.preventDefault()
      ev.stopPropagation()
      const currentDom = dragDom && dragDom()
      currentDom.style.opacity = '1'
      dragEndCb && dragEndCb()
    },
    draggable: true
  }

  return { dragProps }
}

export default useDrag
