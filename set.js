let Set = function() {
  let items = {}

  // 向集合添加一个新的项
  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }
  // 从集合移除一个值
  this.delete = function(value) {
    if (this.has(value)) {
      delete items.value
      return true
    }
    return false
  }
  // 如果值在集合中，返回true，否则返回false
  this.has = function(value) {
    // 第一种方法：
    // in操作符 右边必须是对象 能够检测自身和继承的属性
    // return value in item

    // 第二种方法：
    // hasOwnProperty 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
    // 所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。
    // 这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。
    return items.hasOwnProperty(value)
  }
  // 移除集合中的所有项
  this.clear = function() {
    items = {}
  }
  // 返回集合所包含元素的数量。与数组的length属性类似
  this.size = function() {
    return Object.keys(items).length
  }
  // 返回一个包含集合中所有值的数组
  this.values = function() {
    // return Object.keys(items)

    let values = []
    for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values
  }
}
