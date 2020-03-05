class Node {
  constructor (id, params) {
    this.id = id
    this.params = params
    this.parent = null
    this.children = []
  }
  editParams(params) {
    this.params = {
      ...this.params,
      ...params
    }
  }
  addChild(node) {
    node.parent = this
    this.children.push(node)

    return this
  }
  insertChild(preNode, node) {
    node.parent = this
    const index = this.getChildIndex(preNode)
    if (index !== -1) {
      this.children.splice(index, 0, node)
    }
  }
  deleteChild(node) {
    const index = this.getChildIndex(node)
    if (index !== -1) {
      this.children.splice(index, 1)
    }
  }
  getChildIndex(node) {
    let index = -1
    this.children.some((c, i) => {
      if (c.id === node.id) {
        index = i
        return true
      }
    })
    return index
  }
  toString(join = true) {
    let parts = [ JSON.stringify({ id: this.id, params: this.params }) ]

    if (this.children.length > 0) {
      parts = parts.concat(this.children
        .map(function(node) {
          return node.toString(false)
        })
        .reduce(function(left, right) {
          return left.concat(right)
        })
        .map(function(line) {
          return '  ' + line
        })
      )
    }

    if (join) {
      return parts.join('<br /><br />').replace(/(\,)/ig, '$1<br />')
    } else {
      return parts
    }
  }
}

export default Node