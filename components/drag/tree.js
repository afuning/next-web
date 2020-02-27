class Node {
  constructor(id) {
    this.id = id
    this.parent = null
    this.children = []
  }
  addChild(node) {
    node.parent = this
    this.children.push(node)

    return this
  }
}

class Tree {
  constructor(root) {
    this.root = root
  }

  addNode(node, parent = this.root) {
    parent.addChild(node)
  }

  search(validator) {
    const queue = [ this.root ]
    const result = []

    while (queue.length > 0) {
      const currNode = queue.shift()

      if (validator(currNode)) {
        result.push(currNode)
        continue
      }

      if (currNode.children.length > 0) {
        arrayUtils.prepend(queue, ...currNode.children)
      }
    }

    return result
  }
}