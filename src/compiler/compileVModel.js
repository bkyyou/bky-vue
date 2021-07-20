/**
 * 编译 v-model 指令
 * @param {*} node 节点 
 * @param {*} key v-model 的属性值
 * @param {*} vm Vue 实例
 */
export default function compileVModel(node, key, vm) {
  // 节点标签名、类型
  let { tagName, type } = node
  // 标签名转换为小写
  tagName = tagName.toLowerCase()
  if (tagName === 'input' && type === 'text') {
    // <input type="text" v-model="inputVal" />

    // 设置 input 输入框的初始值
    node.value = vm[key]
    // 给节点添加 input 事件，当事件发生时更改响应式数据
    node.addEventListener('input', function () {
      vm[key] = node.value
    })
  } else if (tagName === 'input' && type === 'checkbox') {
    // <input type="checkbox" v-model="isChecked" />

    // 设置选择框的初始状态
    node.checked = vm[key]
    // 给节点添加 change 事件，当事件发生时更改响应式数据
    node.addEventListener('change', function () {
      vm[key] = node.checked
    })
  } else if (tagName === 'select') {
    // <select v-model="selectedValue"></select>

    // 设置下拉框初始选中的选项
    node.value = vm[key]
    // 添加 change 事件，当事件发生时更改响应式数据
    node.addEventListener('change', function () {
      vm[key] = node.value
    })
  }
}

