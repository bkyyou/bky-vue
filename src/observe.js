
import Observer from './observer.js';

/**
 * 通过 Observer 类为对象设置响应式能力
 * @returns Observer 实例
 */
export default function observe(value) {
  if (typeof value !== 'object') return;

  if (value.__ob__) return value.__ob__;

  return new Observer(value);
}

