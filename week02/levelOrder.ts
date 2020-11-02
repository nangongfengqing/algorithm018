function levelOrder(root: Node | null): number[][] {
  const res: number[][] = []
  const traverseNode = (node: Node, level: number) => {
    if (res.length <= level) {
      res.push([])
    }
    res[level].push(node.val)
    for (let child of node.children) {
      traverseNode(child, level + 1)
    }
  }
  if (root != null) traverseNode(root, 0)
  return res
}
