function inorderTraversal(root: TreeNode | null): number[] {
  if (root) {
    return [
      ...inorderTraversal(root.left),
      root.val,
      ...inorderTraversal(root.right),
    ]
  }
  return []
}
