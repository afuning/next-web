// 新增节点事件
export const addClick = 'node:click:add'
export const cardClick = 'node:click:card'
const eventType = {
  'add': addClick,
  'card': cardClick
}

export const bindEvents = (graph, events) => {
  graph.on('node:click', evt => {
    const targetName = evt.target.cfg.name
    const cbName = eventType[targetName]
    if (events[cbName]) {
      events[cbName](evt)
    }
  })
}

// 新增节点
export const graphAddNode = (graph, node) => {
  const id = Date.now()
  return graph.addItem('node', {
    id,
    ...node
  })
}
