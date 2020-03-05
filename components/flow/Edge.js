// 有向图的边
class Edge {
  constructor(originalId, targetId, property) {
    this.originalId = originalId
    this.targetId = targetId
    this.property = property
  }
}

export default Edge