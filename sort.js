class ArrayList {
  constructor(array) {
    this.array = array
  }

  static swap(array, index1, index2) {
    let aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }

  insert(item) {
    this.array.push(item)
  }

  toString() {
    return array.join()
  }

  bubbleSort() {
    // 冒泡排序：时间复杂度O(n2)
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - 1 - i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          ArrayList.swap(this.array, j, j + 1)
        }
      }
    }
  }

  selectionSort() {
    // 选择排序：时间复杂度O(n2)
    let indexMin = 0
    for (let i = 0; i < this.array.length - 1; i++) {
      indexMin = i
      for (let j = i; j < this.array.length; j++) {
        if (this.array[indexMin] > this.array[j]) {
          indexMin = j
        }
      }
      if (i !== indexMin) {
        ArrayList.swap(this.array, i, indexMin)
      }
    }
  }

  insertionSort() {
    // 插入排序：时间复杂度O(n2)，排序小型数组的时候，性能比冒泡和选择好，默认第一项已经排序
    let length = this.array.length
    let j = 0
    let temp = null

    for (let i = 1; i < length; i++) {
      j = i
      temp = array[i]

      while (j > 0 && array[j - 1] > array[j]) {
        array[j] = array[j - 1]
        j--
      }
      array[j] = temp
    }
  }
}

class CustomHTMLElement {
  constructor(element) {
    this.element = element
  }
  get html() {
    return this.element.innerHTML
  }
  set html(value) {
    this.element.innerHTML = value
  }
}
