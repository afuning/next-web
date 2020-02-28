export function debounce (fn, wait) {
  let timeout = null
  return (index, ...args) => {
    const context = this
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

export const arrayUtil = {
  delete: (key, value, array) => {
    const index = arrayUtil.findIndex(key, value, array)
    if (index !== -1) {
      array.splice(index, 1)
    }
  },
  findIndex: (key, value, array) => {
    let index = -1
    array.some((o, i) => {
      if(o[key] === value) {
        index = i
        return true
      }
    })
    return index
  }
}