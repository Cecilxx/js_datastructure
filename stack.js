export const Stack1 = function() {
  let items = []

  this.push = function(element) {
    items.push(element)
  }
  this.pop = function() {
    return items.pop()
  }
  this.peek = function() {
    return items[items.length - 1]
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

export const Stack2 = (function() {
  const items = new WeakMap()
  class Stack {
    constructor() {
      items.set(this, [])
    }
    push(element) {
      let s = items.get(this)
      s.push(element)
    }
    pop() {
      let s = items.get(this)
      return s.pop()
    }
    peek() {
      let s = items.get(this)
      return s[s.length - 1]
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
  return Stack
})()

let divideBy2 = function(decNumber) {
  let remStack = new Stack1()
  let rem
  let binaryString = ''
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / 2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }
  return binaryString
}

let baseConverter = function(decNumber, base) {
  let remStack = new Stack1()
  let rem
  let baseString = ''
  let digits = '0123456789ABCDEF'
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()].toString()
  }
  return baseString
}
