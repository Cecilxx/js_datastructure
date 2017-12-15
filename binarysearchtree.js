let BinarySearchTree = function() {
  let root = null
  let Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  this.insert = function(key) {
    let newNode = new Node(key)

    if (!root) {
      root = newNode
    } else {
      this.insertNode(root, newNode)
    }
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
}
