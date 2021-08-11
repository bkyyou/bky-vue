import observe from './observe.js';
import Dep from './dep.js';

/**
 * 通过 Object.defineProperty 为 obj.key 设置 getter、setter 拦截
 * getter 时收集依赖
 * setter 时依赖通过 watcher 更新
 */
export default function defineReactive(obj, key, val) {
  // 递归调用 observe，处理 val 仍然为对象的情况 // 为 value 为对象 设置响应式
  const childOb = observe(val) // obj = {a: {b: 1}}   val = {b: 1} a.b
  // {a: {b: {c: 1}}}
  const dep = new Dep() // todo 为什么不是 obj.__ob__.dep??? 现在的想法： 用上一层的 watcher 会收集更多，触发更新更多，影响性能

  Object.defineProperty(obj, key, {
    // 当发现 obj.key 的读取行为时，会被 get 拦截
    get() {
      // 读取数据时 && Dep.target 不为 null，则进行依赖收集 // 上层触发，层层收集， 应该是说错了，应该是只会收集当前和子辈
      if (Dep.target) {
        console.log('收集~~~')
        // debugger
        console.log(obj, val, 111)
        dep.depend()
        // obj.__ob__.dep.depend(); // 第二种方式， 
        // 如果存在子 ob，则顺道一块儿完成依赖收集
        // todo 为什么要收集子集（孩子的）？？？
        if (childOb) {
          // debugger
          // 这里面收集的 watcher 就是 父元素的 watcher， 触发最开始 cb
          childOb.dep.depend() // 层层收集 这个 deep 是 observer 中的deep
        }
        console.log(3)
      }
      console.log(`getter: key = ${key}`)
      return val
    },
    // 当发生 obj.key = xx 的赋值行为时，会被 set 拦截
    set(newV) {
      console.log(`setter: ${key} = ${newV}`)
      if (newV === val) return
      val = newV
      // 对新值进行响应式处理，这里针对的是新值为非原始值的情况，比如 val 为对象、数组
      observe(val)
      // 数据更新，让 dep 通知自己收集的所有 watcher 执行 update 方法
      dep.notify()
      // obj.__ob__.dep.notify() // 第二种方式
    }
  })
}

