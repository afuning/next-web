class Tree {
  constructor (root) {
    this.root = root
  }
  addNode(node, parent = this.root) {
    parent.addChild(node)
  }
  search(validator) {
    let queue = [ this.root ]
    const result = []

    while (queue.length > 0) {
      const currNode = queue.shift()

      if (validator(currNode)) {
        result.push(currNode)
        continue
      }

      if (currNode.children.length > 0) {
        queue = [...queue, ...currNode.children]
      }
    }

    return result
  }
  searchOne(validator) {
    let queue = [ this.root ]
    let result = null

    while (queue.length > 0) {
      const currNode = queue.shift()

      if (validator(currNode)) {
        result = currNode
        break
      }

      if (currNode.children.length > 0) {
        queue = [...queue, ...currNode.children]
      }
    }

    return result || -1
  }
}

export default Tree