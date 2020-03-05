import React, { useEffect, useState, useReducer } from 'react'
import { Drawer, Popover, Button } from 'antd'
import { bindEvents, addClick, cardClick, graphAddNode } from '../../components/flow/utils'
import { init, reducer } from '../../components/flow/nodeReducer'
import style from './style.less'
// 引用G6
let G6
if (typeof window !== 'undefined') {
  G6 = require('@antv/g6')
  require('../../components/flow/registerShape')
}
let graph = null
const Flow = () => {
  const ref = React.useRef(null)
  // 抽屉显示
  const [showNodeForm, setShowNodeForm] = useState(false)
  // 点击新增
  const [addMenuPosition, setAddMenuPosition] = useState({x: 0, y: 0})
  // 操作节点
  const [state, dispatch] = useReducer(reducer, undefined, init)

  // const bindEvents = () => {
  //   // 监听edge上面mouse事件
  //   graph.on('edge:mouseenter', evt => {
  //     const { item, target } = evt
  //     const type = target.get('type')
  //     if(type !== 'text') {
  //       return
  //     }
  //     const model = item.getModel()
  //     const { endPoint } = model
  //     // y=endPoint.y - height / 2，在同一水平线上，x值=endPoint.x - width - 10
  //     const y = endPoint.y - 35
  //     const x = endPoint.x - 150 - 10
  //     const point = graph.getCanvasByPoint(x, y)
  //     setEdgeTooltipX(point.x)
  //     setEdgeTooltipY(point.y)
  //     setShowEdgeTooltip(true)
  //   })
  useEffect(() => {
    if(!graph) {
      graph = new G6.Graph({
        container: ref.current,
        width: 1200,
        height: 800,
        modes: {
          default: ['drag-canvas']
        },
        defaultNode: {
          type: 'card-node',
          style: {
            width: 150,
            height: 60
          }
        },
        defaultEdge: {
          type: 'polyline',
          style: {
            radius: 20,
            endArrow: true,
            lineWidth: 2,
            stroke: '#C2C8D5'
          }
        },
        layout: {
          type: 'dagre',
          rankdir: 'TB',
          nodesep: 60,
          ranksep: 40
        }
      })
    }
    graph.data(state.data)
    graph.render()

    // const edges = graph.getEdges()
    // edges.forEach(edge => {
    //   const line = edge.getKeyShape()
    //   const stroke = line.attr('stroke')
    //   const targetNode = edge.getTarget()
    //   targetNode.update({
    //     style: { stroke }
    //   })
    // })
    graph.paint()

    bindEvents(graph, {
      [addClick]: (evt) => {
        const { item } = evt
        const model = item.getModel()
        console.log(evt)
        const { x, y, style } = model
        setAddMenuPosition({x: x + style.width / 2 + 10, y: y + style.height})
        dispatch({ type: 'select', node: evt.item })
      },
      [cardClick]: (evt) => {
        setShowNodeForm(true)
      }
    })
    // const bodyEvent = () => {
    //   setAddMenuPosition({x: 0, y: 0})
    // }
    // document.body.addEventListener('click', bodyEvent)
    // return () => {
    //   document.body.removeEventListener(bodyEvent)
    // }
    console.log(1)
  }, [])

  const handleAddNode = () => {
    dispatch({ type: 'add', node: { id: Date.now(), label: '请选择负责任', title: '新节点' } })
    graph.changeData(state.data)
  }

  useEffect

  return (
    <>
      <div className={style.flow_container} ref={ref}></div>
      <Drawer
        onClose={() => setShowNodeForm(false)}
        visible={showNodeForm}
      ><NodeForm /></Drawer>
      <Popover
        title=""
        placement="rightTop"
        content={<AddMenu handleAddNode={handleAddNode} />}
        overlayStyle={{ width: 256, left: addMenuPosition.x, top: addMenuPosition.y }}
        visible={true}
      >
      </Popover>
    </>
  )
}

const NodeForm = () => (
  <div>1111</div>
)

const AddMenu = ({ handleAddNode }) => (
  <div>
    <div onClick={handleAddNode} className={style.add_menuitem}>新节点</div>
    <div className={style.add_menuitem}>抄送</div>
    <div className={style.add_menuitem}>添加分支</div>
    <div className={style.add_menuitem}>触发子流程</div>
  </div>
)

export default Flow