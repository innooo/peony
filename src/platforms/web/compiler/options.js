/* @flow */

import {
  isPreTag,
  mustUseProp,
  isReservedTag,
  getTagNamespace
} from '../util/index'

import modules from './modules/index'
import directives from './directives/index'
import { genStaticKeys } from 'shared/util'
import { isUnaryTag, canBeLeftOpenTag } from './util'

export const baseOptions: CompilerOptions = {
  expectHTML: true,
  modules,
  directives,
  isPreTag, // (tag: ?string): boolean => tag === 'pre'
  isUnaryTag, // 和上一个属性类似，返回一些一元tag的函数
  mustUseProp, // 一些需要绑定属性的标签，如<input checked /> 中的checked属性，是和数据绑定相关的
  canBeLeftOpenTag, // 和上一个属性类似，返回一些自闭合的tag
  isReservedTag, // 保留的html标签
  getTagNamespace,
  staticKeys: genStaticKeys(modules)
}
