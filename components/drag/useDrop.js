const useDrop = ({ dropCb }) => {
  // 放置
  const dropProps = {
    onDragOver: ev => {
      ev.preventDefault()
    },
    onDrop: ev => {
      ev.preventDefault()
      // ev.stopPropagation()
      let node = ev.dataTransfer.getData('node')
      if (node) {
        node = JSON.parse(node)
        if (!node.id) {
          node.id = new Date().getTime()
        }
      }
      // // 通过 componentId 修改数据，通过 React Rerender 刷新 UI
      dropCb && dropCb({ type: 'insert', node })
    }
  }

  return { dropProps }
}

export default useDrop
