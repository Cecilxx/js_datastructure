let linkedlist = function() {
  // Node: 加入链表的项
  let Node = function(element) {
    this.element = element
    this.next = null
  }
  // length: 链表的长度
  let length = 0
  // head: 第一个节点的引用
  let head = null

  // append: 尾部添加
  this.append = function(element) {
    let node = new Node(element)
    let current = null

    if (head === null) {
      head = node
    } else {
      current = head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    length++
  }
  // insert: 任意位置插入
  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element)
      let current = head
      let previous = null
      let index = 0

      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node
      }
    }
  }
  // removeAt: 从列表指定位置移除一项
  this.removeAt = function(position) {
    if (position >= 0 && position <= length) {
      let current = head
      let previous = null
      let index = 0

      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        previous.next = current.next
      }
    }
  }
  // toString: 由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值
  this.toString = function() {
    let current = head
    let string = ''
    while (current.next) {
      string += current.element + (current.next ? 'n' : '')
      current = current.next
    }

    return string
  }
  // indexOf: 返回元素在列表中的索引，没有则返回-1
  this.indexOf = function(element) {
    let current = head
    let index = 0

    while (current) {
      if (current.element === element) {
        return index
      }
      current = current.next
      index++
    }

    return -1
  }
  // remove: 移除一项
  this.remove = function(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
  // isEmpty: 判读是否为空
  this.isEmpty = function() {
    return length === 0
  }
  // size: 链表包含的元素个数
  this.size = function() {
    return length
  }
}
