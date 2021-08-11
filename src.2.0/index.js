import initData from './initData.js';
import mount from './compiler/index.js';
import renderHelper from './compiler/renderHelper.js';
import patch from './compiler/patch.js';

/**
 * Vue 构造函数
 * @param {*} options new Vue(options) 时传递的配置对象
 */

export default function Vue(options) {
  this._init(options);
  // this.$options = options;

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

  // 安装运行时的渲染工具函数
  renderHelper(this)
  // 在实例上安装 patch 函数
  this.__patch__ = patch
  // 如果存在 el 配置项，则调用 $mount 方法编译模版
  if (this.$options.el) {
    this.$mount()
  }
}

Vue.prototype.$mount = function() {
  mount(this);
}


/**
 * 负责执行 vm.$options.render 函数
 */
// Vue.prototype._render = function () {
//   // 给 render 函数绑定 this 上下文为 Vue 实例
//   return this.$options.render.apply(this)
// }