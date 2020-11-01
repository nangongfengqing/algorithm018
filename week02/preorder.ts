var preorder = function (root) {
  const arr = []
  function preOrderTraverse(node) {
    if (node) {
      arr.push(node.val)
      for (let child of node.children) {
        preOrderTraverse(child)
      }
    }
  }
  preOrderTraverse(root)
  return arr
}
