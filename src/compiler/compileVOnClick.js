/**
 * 编译 v-on:click 指令
 * @param {*} node 节点
 * @param {*} method 方法名
 * @param {*} vm Vue 实例
 */
export default function compileVOnClick(node, method, vm) {
  // 给节点添加一个 click 事件，回调函数是对应的 method
  node.addEventListener('click', function (...args) {
    // 给 method 绑定 this 上下文
    vm.$options.methods[method].apply(vm, args)
  })
}

