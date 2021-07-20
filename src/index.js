import initData from './initData.js';
import mount from './compiler/index.js';

/**
 * Vue 构造函数
 * @param {*} options new Vue(options) 时传递的配置对象
 */

export default function Vue(options) {
  this._init(options);

  // 如果存在 el 配置项， 则调用 $mount 方法编译模板
  if (this.$options.el) {
    this.$mount()
  }
}

/**
 * 初始化配置对象
 * @param {*} options 
 */
Vue.prototype._init = function(options) {
  this.$options = options;
  initData(this);
}

Vue.prototype.$mount = function() {
  mount(this);
}