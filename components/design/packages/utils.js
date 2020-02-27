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