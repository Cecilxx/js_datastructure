import { Linkedlist } from './linkedlist'
let djb2HashCode = function(key) {
  var hash = 5381 //{1}
  for (var i = 0; i < key.length; i++) {
    //{2}
    hash = hash * 33 + key.charCodeAt(i) //{3}
  }
  return hash % 1013 //{4}
}

export const HashTable = function() {
  let table = []

  let loseloseHashCode = function(key) {
    let hash = 0 //{1} 3 for (var i = 0; i < key.length; i++) { //{2}
    for (var i = 0; i < key.length; i++) {
      //{2}
      hash += key.charCodeAt(i) //{3}
    }
    return hash % 37
  }
  // 添加
  this.put = function(key, value) {
    console.log(loseloseHashCode(key) + ' - ' + key)
    table[loseloseHashCode(key)] = value
  }
  // 移除
  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined
  }
  // 查询
  this.get = function(key) {
    return table[loseloseHashCode(key)]
  }

  this.print = function() {
    for (var i = 0; i < table.length; ++i) {
      //{1}
      if (table[i] !== undefined) {
        //{2}
        console.log(i + ': ' + table[i]) //{3}
      }
    }
  }
}

// 分离链接
export const HashTable1 = function() {
  const loseloseHashCode = function(key) {
    let hash = 0 //{1} 3 for (var i = 0; i < key.length; i++) { //{2}
    for (var i = 0; i < key.length; i++) {
      //{2}
      hash += key.charCodeAt(i) //{3}
    }
    return hash % 37
  }
  const ValuePair = function(key, value) {
    this.key = key
    this.value = value
    this.toString = function() {
      return '[' + this.key + ' - ' + this.value + ']'
    }
  }
  let table = []

  this.put = function(key, value) {
    const position = loseloseHashCode(key)

    if (!table[position]) {
      table[position] = new Linkedlist()
    }
    table[position].append(new ValuePair(key, value))
  }

  this.get = function(key) {
    const position = loseloseHashCode(key)

    if (!table[position]) return undefined

    let current = table[position].getHead()
    while (current.next) {
      if (current.element.key === key) {
        return current.element.value
      }
      current = current.next
    }
    //检查元素在链表第一个或最后一个节点的情况
    if (current.element.key === key) {
      return current.element.value
    }
  }

  this.remove = function(key) {
    const position = loseloseHashCode(key)

    if (!table[position]) return false

    let current = table[position].getHead()
    while (current.next) {
      if (current.element.key === key) {
        table[position].remove(current.element)
        if (table[position].isEmpty()) {
          table[position] = undefined //{14}
        }
        return true
      }
      current = current.next
    }
    //检查元素在链表第一个或最后一个节点的情况
    if (current.element.key === key) {
      table[position].remove(current.element)
      if (table[position].isEmpty()) {
        table[position] = undefined //{14}
      }
      return true
    }
  }
  this.getValueAtPosition = function(key) {
    const position = loseloseHashCode(key)
    if (!table[position]) return undefined
    return table[position]
  }
}
