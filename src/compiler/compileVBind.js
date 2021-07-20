import Watcher from '../watcher.js';

/**
 * 编译 v-bind 指令
 * @param {*} node 节点
 * @param {*} attrValue 属性值
 * @param {*} vm Vue 实例
 */
export default function compileVBind(node, attrValue, vm) {
  // 属性名称
  const attrName = RegExp.$1
  // 移除模版中的 v-bind 属性
  node.removeAttribute(`v-bind:${attrName}`)
  // 当属性值发生变化时，重新执行回调函数
  function cb() {
    node.setAttribute(attrName, vm[attrValue])
  }
  // 实例化 Watcher，当属性值发生变化时，dep 通知 watcher 执行 update 方法，cb 被执行，重新更新属性
  new Watcher(cb)
}

