import compileVOnClick from './compileVOnClick.js';
import compileVBind from './compileVBind.js';
import compileVModel from './compileVModel.js';

/**
 * 编译属性节点
 * @param {*} node 节点
 * @param {*} vm Vue 实例
 */
export default function compileAttribute(node, vm) {
  // 将类数组格式的属性节点转换为数组
  const attrs = Array.from(node.attributes)
  // 遍历属性数组
  for (let attr of attrs) {
    // 属性名称、属性值
    const { name, value } = attr
    if (name.match(/v-on:click/)) {
      // 编译 v-on:click 指令
      compileVOnClick(node, value, vm)
    } else if (name.match(/v-bind:(.*)/)) {
      // v-bind
      compileVBind(node, value, vm)
    } else if (name.match(/v-model/)) {
      // v-model
      compileVModel(node, value, vm)
    }
  }
}

