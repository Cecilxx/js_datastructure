export const Dictionary = function() {
  let items = {}

  // 添加
  this.set = function(key, value) {
    items[key] = value
  }
  // 删除
  this.delete = function(key) {
    if (this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }
  // 如果某个键值存在于这个字典中，则返回true，反之则返回false
  this.has = function(key) {
    return items.hasOwnProperty(key)
  }
  // 通过键值查找特定的数值并返回
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined
  }
  // 将这个字典中的所有元素全部删除
  this.clear = function() {
    return (items = {})
  }
  // 返回字典所包含元素的数量。与数组的length属性类似
  this.size = function() {
    return Object.keys(items).length
  }
  // 将字典所包含的所有键名以数组形式返回
  this.keys = function() {
    return Object.keys(items)
  }
  // 将字典所包含的所有数值以数组形式返回
  this.values = function() {
    let values = []
    for (let key in items) {
      if (this.has(key)) arr.push(items[key])
    }
    return values
  }
}
