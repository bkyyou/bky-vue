/**
 * 是否为自闭合标签，内置一些自闭合标签，为了处理简单
 */
export function isUnaryTag(tagName) {
  const unaryTag = ['input']
  return unaryTag.includes(tagName)
}

/**
 * 是否为平台保留节点
 */
export function isReserveTag(tagName) {
  const reserveTag = ['div', 'h3', 'span', 'input', 'select', 'option', 'p', 'button', 'template']
  return reserveTag.includes(tagName)
}

