export const Queue1 = function() {
  this.enqueue = function(element) {
    items.push(element)
  }
  this.dequeue = function() {
    return items.shift()
  }
  this.front = function() {
    return items[0]
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.size = function() {
    return items.length
  }
  this.clear = function() {
    items = []
  }
  this.print = function() {
    console.log(items.toString())
  }
}

export const Queue2 = (function() {
  const items = new WeakMap()
  class Queue {
    constructor() {
      items.set(this, [])
    }
    enqueue(element) {
      let s = items.get(this)
      s.push(element)
    }
    dequeue() {
      let s = items.get(this)
      return s.shift()
    }
    front() {
      let s = items.get(this)
      return s[0]
    }
    isEmpty() {
      let s = items.get(this)
      return s.length === 0
    }
    size() {
      let s = items.get(this)
      return s.length
    }
    clear() {
      items.set(this, [])
    }
    print() {
      let s = items.get(this)
      console.log(s.toString())
    }
  }
  return Queue
})()

// 优先队列
let PriorityQueue = function() {
  let items = []
  function QueueElement(element, priority) {
    // {1}
    this.element = element
    this.priority = priority
  }
  this.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority)
    let added = false
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        // {2}
        items.splice(i, 0, queueElement) // {3}
        added = true
        break // {4}
      }
    }
    if (!added) {
      items.push(queueElement) //{5}
    }
  }
  this.print = function() {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} -
      ${items[i].priority}`)
    }
  }
  // 其他方法同上
}

// 循环队列---击鼓传花游戏
let hotPotato = function(nameList, num) {
  let queue = new Queue1() // {1}
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]) // {2}
  }
  let eliminated = ''
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()) // {3}
    }
    eliminated = queue.dequeue() // {4} console.log(eliminated + '在击鼓传花游戏中被淘汰。');
    console.info(eliminated)
  }
  return queue.dequeue() // {5}
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 7)
console.log('The winner is: ' + winner)
