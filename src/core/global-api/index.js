/* @flow */

import config from '../config'
import { initUse } from './use'
import { initMixin } from './mixin'
import { initExtend } from './extend'
import { initAssetRegisters } from './assets'
import { set, del } from '../observer/index'
import { ASSET_TYPES } from 'shared/constants'
import builtInComponents from '../components/index'

import {
  warn,
  extend,
  nextTick,
  mergeOptions,
  defineReactive
} from '../util/index'

export function initGlobalAPI (Vue: GlobalAPI) {
  // config
  const configDef = {}
  configDef.get = () => config
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
  }
  Object.defineProperty(Vue, 'config', configDef) // 为Vue添加静态config属性

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  // Vue内部使用的util方法，不建议外部使用，因为版本更迭会导致其不稳定
  Vue.util = {
    warn,
    extend,
    mergeOptions,
    defineReactive
  }

  Vue.set = set
  Vue.delete = del
  Vue.nextTick = nextTick

  Vue.options = Object.create(null)
  // 添加Vue.options.component
  // 添加Vue.options.directive
  // 添加Vue.options.filter
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue

  extend(Vue.options.components, builtInComponents) // 将keepAlive内置组件添加进Vue.options.components
  initUse(Vue) // 添加Vue.use静态方法，该方法用于挂载插件
  initMixin(Vue) // 添加Vue.mixin静态方法，
  initExtend(Vue) // 添加Vue.extend静态方法，
  initAssetRegisters(Vue) // 遍历ASSET_TYPES（component、directive、filter）添加Vue.component Vue.directive Vue.filter静态方法
}
