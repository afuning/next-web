const useDrag = ({ node }) => {
  // 拖拽
  const dragProps = {
    onDragStart: ev => {
      ev.stopPropagation()
      ev.dataTransfer.setData('node', JSON.stringify(node))
    },
    draggable: true
  }

  return { dragProps }
}

export default useDrag
