
import React, { useContext, useReducer } from 'react'
import Tree from './TreeClass'
import Node from './NodeClass'
import { createEdit } from './config'
/**
 * 数据初始化
 *
 * @param {*} initState
 * @returns
 */
function init (initState) {
  const root = new Node(0, {})
  const tree = new Tree(root)
  return {
    tree,
    current: -1,
    preNodeId: ''
  }
}
/**
 * 
 * dispatch 操作
 * 
 * @param {*} state
 * @param {*} action
 * @returns
 */
function reducer (state, action) {
  console.log(action, state)
  switch (action.type) {
    case 'insert':
      const node = insertNode(state.preNodeId, action.node, state.tree)
      return {
        ...state,
        preNodeId: '',
        tree: state.tree,
        current: node
      }
    case 'delete':
      deleteNode(action.id, state.tree)
      return {
        ...state,
        tree: state.tree,
        current: state.current.id === action.id ? -1 : state.current
      }
    case 'select':
      const current = findOneNode(action.id, state.tree)
      return {
        ...state,
        current
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
    // end
    case 'end':
      return {
        ...state,
        preNodeId: ''
      }
    // 编辑node
    case 'edit':
      editNode(state.current, {editer: action.editer})
      return {
        ...state,
        current: state.current
      }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error();
  }
}

function createNode (id, node) {
  // 生成组件node对应的编辑项
  const editer = createEdit(id, node.componentId)
  return new Node(id , { editer, componentId: node.componentId })
}
function insertNode (preNodeId, node, tree) {
  const nNodes =  tree.search(({id}) => node.id=== id)
  let nNode = null
  if (nNodes[0]) {
    nNode = nNodes[0]
    nNode.parent.deleteChild(nNode)
  } else {
    nNode = createNode(node.id, node)
  }
  const nodes = tree.search(({id}) => preNodeId === id)
  if (nodes[0]) {
    nodes[0].parent.insertChild(nodes[0], nNode)
  } else {
    tree.addNode(nNode)
  }
  return nNode
}
function findOneNode (nodeId, tree) {
  const nNode = tree.searchOne(({id}) => nodeId=== id)
  if (nNode !== -1) {
    return nNode
  }
  return -1
}
function deleteNode (nodeId, tree) {
  const nNode =  findOneNode(nodeId, tree)
  if (nNode !== -1) {
    nNode.parent.deleteChild(nNode)
  }
}
function editNode (node, params) {
  if (params.editer) {
    node.params.editer.editField(params.editer)
  }
  // node.editParams()
}

const DesignContext = React.createContext()

export const DesignProvider = ({ children }) => {
  const contextValue = useReducer(reducer, undefined, init)
  return (
    <DesignContext.Provider value={contextValue}>
      {children}
    </DesignContext.Provider>
  )
}

export const useDesign = () => {
  const contextValue = useContext(DesignContext);
  return contextValue;
}