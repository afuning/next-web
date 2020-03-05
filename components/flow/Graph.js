// 图
class Graph {
  constructor(vertices, edges) {

    // Vertices
    this.vertexIds = []
    this.vertices = {}

    for (let i = 0; i < vertices.length; ++i) {
      const vertex = vertices[i]

      this.vertexIds.push(vertex.id)
      this.vertices[vertex.id] = vertex
    }

    const edgesWithId = edges.map(function(edge, i) {
      edge.id = i + 1
      return edge
    })

    // Edges
    this.edgeIds = []
    this.edges = {}
    this.inEdgeRelations = {}
    this.outEdgeRelations = {}

    for (let i = 0; i < edgesWithId.length; ++i) {
      const edge = edgesWithId[i]

      this.edgeIds.push(edge.id)
      this.edges[edge.id] = edge

      if (typeof this.outEdgeRelations[edge.originalId] === 'undefined') {
        this.outEdgeRelations[edge.originalId] = []
      }

      if (typeof this.inEdgeRelations[edge.targetId] === 'undefined') {
        this.inEdgeRelations[edge.targetId] = []
      }

      this.inEdgeRelations[edge.targetId].push(edge.id)
      this.outEdgeRelations[edge.originalId].push(edge.id)
    }
    
  }
}

export default Graph