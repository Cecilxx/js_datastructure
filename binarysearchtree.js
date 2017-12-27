let BinarySearchTree = function() {
  let root = null
  let Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  let insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  let inOrderTraverseNode = function(node, callback) {
    // 中序：从小到大排序
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  let preOrderTraverseNode = function(node, callback) {
    // 先序：打印表结构
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  let postOrderTraverseNode = function(node, callback) {
    // 后序：计算一个目录和它的子目录中所有文件所占空间的大小。
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  let minNode = function(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }

      return node.key
    }

    return null
  }

  let maxNode = function(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }

      return node.key
    }

    return null
  }

  let searchNode = function(node, key) {
    if (node === null) {
      return false
    }
    if (key < node.key) {
      searchNode(node.left, key)
    } else if (key > node.key) {
      searchNode(node.right, key)
    } else {
      return true
    }
  }

  let findMinNode = function(node) {
    while (node && node.left !== null) {
      node = node.left
    }

    return node
  }

  let removeNode = function(node, key) {
    if (node === null) {
      return null
    }

    if (key < node.key) {
      removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      removeNode(node.right, key)
      return node
    } else {
      // 一个叶节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      // 有右子节点
      if (node.left === null) {
        node = node.right
        return node
      }
      // 有左子节点
      if (node.right === null) {
        node = node.left
        return node
      }
      // 一个有两个子节点的节点
      let aux = findMinNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, aux.key)
      return node
    }
  }

  this.insert = function(key) {
    let newNode = new Node(key)

    if (!root) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback) //{1}
  }

  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback)
  }

  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  }

  this.min = function() {
    return minNode(root)
  }

  this.max = function() {
    return maxNode(root)
  }

  this.search = function(key) {
    return searchNode(root, key)
  }

  this.remove = function(key) {
    root = removeNode(root, key)
  }
}
