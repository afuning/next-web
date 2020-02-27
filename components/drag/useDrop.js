const useDrop = ({ dragtype, dropCb }) => {
  // 放置
  const dropProps = {
    onDragOver: ev => {
      ev.preventDefault()
      ev.stopPropagation()
    },
    onDrop: ev => {
      ev.preventDefault()
      ev.stopPropagation()
      
      // ev.stopPropagation()
      let dragItemType = ev.dataTransfer.getData('dragtype')
      if (dragtype !== dragItemType) return
      let node = ev.dataTransfer.getData('node')
      if (node) {
        node = JSON.parse(node)
        if (!node.id) {
          node.id = new Date().getTime()
        }
      }
      // // 通过 componentId 修改数据，通过 React Rerender 刷新 UI
      dropCb && dropCb({ type: 'insert', node }, ev)
    }
  }

  return { dropProps }
}

export default useDrop
