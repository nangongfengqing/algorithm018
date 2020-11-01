function preorderTraversal(root: TreeNode | null): number[] {
  const arr: number[] = []
  const preorderTraverse = (node: TreeNode | null) => {
    if (node != null) {
      arr.push(node.val)
      preorderTraverse(node.left)
      preorderTraverse(node.right)
    }
  }
  preorderTraverse(root)
  return arr
}
