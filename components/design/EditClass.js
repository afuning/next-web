class Edit {
  constructor (nodeId, editConfig) {
    this.nodeId = nodeId
    this.field = {...editConfig}
  }
  getFieldItem (key) {
    return this.field[key]
  }
  getField () {
    return this.field
  }
  editField (field) {
    this.field = {
      ...this.field,
      ...field
    }
  }
}

export default Edit
