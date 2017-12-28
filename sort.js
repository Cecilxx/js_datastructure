class ArrayList {
  constructor(array) {
    this.array = array
  }

  static swap(array, index1, index2) {
    let aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }

  static mergeSortRec(array) {
    if (array.length === 1) return array
    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid, array.length)

    return ArrayList.merge(
      ArrayList.mergeSortRec(left),
      ArrayList.mergeSortRec(right)
    )
  }

  static merge(left, right) {
    let result = []
    let il = 0
    let ir = 0

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }
    while (il < left.length) {
      result.push(left[il++])
    }
    while (ir < right.length) {
      result.push(right[ir++])
    }

    return result
  }

  static quick(array, left, right) {
    let index
    if (array.length > 1) {
      index = ArrayList.partition(array, left, right)

      if (left < index - 1) {
        ArrayList.quick(array, left, index - 1)
      }
      if (index < right) {
        ArrayList.quick(array, index, right)
      }
    }
  }

  static partition(array, left, right) {
    // 划分过程
    let pivot = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right

    while (i <= j) {
      while (array[i] < pivot) {
        i++
      }
      while (array[j] > pivot) {
        j--
      }
      if (i <= j) {
        ArrayList.swap(array, i, j)
        i++
        j--
      }
    }
    return i
  }

  insert(item) {
    this.array.push(item)
  }

  toString() {
    return array.join()
  }

  reverse() {
    this.array.reverse()
  }

  bubbleSort() {
    // 冒泡排序：时间复杂度O(n2)
    let start = +new Date()
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - 1 - i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          ArrayList.swap(this.array, j, j + 1)
        }
      }
    }
    let end = +new Date()
    console.info('bubbleSort:' + (end - start) + 'ms')
  }

  selectionSort() {
    // 选择排序：时间复杂度O(n2)
    let start = +new Date()
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
    let end = +new Date()
    console.info('selectionSort:' + (end - start) + 'ms')
  }

  insertionSort() {
    // 插入排序：时间复杂度O(n2)，排序小型数组的时候，性能比冒泡和选择好，默认第一项已经排序
    let start = +new Date()
    let length = this.array.length
    let j = 0
    let temp = null

    for (let i = 1; i < length; i++) {
      j = i
      temp = this.array[i]

      while (j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1]
        j--
      }
      this.array[j] = temp
    }
    let end = +new Date()
    console.info('insertionSort:' + (end - start) + 'ms')
  }

  mergeSort() {
    // 归并排序：时间复杂度O(nlogn)
    let start = +new Date()
    this.array = ArrayList.mergeSortRec(this.array)
    let end = +new Date()
    console.log('mergeSort:' + (end - start) + 'ms')
  }
  quickSort() {
    // 快速排序：时间复杂度O(nlogn)，但性能比其他复杂度O(nlogn)方法好
    let start = +new Date()
    ArrayList.quick(this.array, 0, this.array.length - 1)
    let end = +new Date()
    console.log('quickSort:' + (end - start) + 'ms')
  }
}

function creatArray(length) {
  let array = new Array(length)
  let index = 0
  while (length > 0) {
    array[index] = length
    length--
    index++
  }
  return array
}
