function isPlainObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}
/**
 * Observer
 */
function observe(target) {
  if (!target || !isPlainObject(target)) return
  Object.keys(target).forEach(key => {
    defineReactive(target, key, target[key])
  })
}

function defineReactive(target, key, val) {
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get() {
      return val
    },
    set(newVal) {
      val = newVal
    }
  })
}
/**
 * Watcher
 */

/**
 * Compiler
 */
