import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // 为Vue.prototype添加_init实例方法
stateMixin(Vue) // 为Vue.prototype添加$data $props $set $delete $watch实例方法
eventsMixin(Vue) // 为Vue.prototype添加$on $once $off $emit 实例方法
lifecycleMixin(Vue) // 为Vue.prototype添加_update $forceUpdate $destroy实例方法
renderMixin(Vue) // 为Vue.prototype添加$nextTick _render实例方法

export default Vue
