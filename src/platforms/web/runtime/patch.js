/* @flow */

import * as nodeOps from 'web/runtime/node-ops' // 操作真实dom的方法
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'
/**
 * baseModules: [
  ref,
  directives
]
platformModules: [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]
 */
// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

/**
 * nodeOps: 是与平台相关的操作真实dom的api
 */
export const patch: Function = createPatchFunction({ nodeOps, modules })
