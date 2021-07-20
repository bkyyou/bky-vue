
import compileTextNode from './compileTextNode.js';
import compileAttribute from './compileAttribute.js';

/**
 * 递归编译整棵节点树
 * @param {*} nodes 节点
 * @param {*} vm Vue 实例
 */
export default function compileNode(nodes, vm) {
  for (let i = 0, len = nodes.length; i < nodes.length; i++) {
    const node = nodes[i]
    if (node.nodeType === 1) { // 元素节点
      // 编译元素上的属性节点
      compileAttribute(node, vm);
      // 递归编译子节点
      compileNode(Array.from(node.childNodes), vm);
    } else if (node.nodeType === 3 && node.textContent.match(/{{(.*)}}/)) {
      // 编译节点文本
      compileTextNode(node, vm);
    }
  }
}