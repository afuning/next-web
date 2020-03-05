import { data } from './data'
export const init = (initState) => {
  return {
    data,
    currentNode: null
  }
}

export const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      console.log('add', action, state.currentNode)
      return {
        data: {
          ...state,
          nodes: [
            ...state.data.nodes
          ]
        }
      }
    case 'select':
        return {
          ...state,
          currentNode: action.node
        }
    default:
      return state
  }
}