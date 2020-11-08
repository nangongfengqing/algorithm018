/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const indexMap: Map<number, number> = new Map()
    const builder = (preorder: number[], inorder: number[], preorder_left: number, preorder_right: number, inorder_left: number, inorder_right: number): TreeNode | null => {
        if (preorder_left > preorder_right) return null
        const preorder_root = preorder_left
        const inorder_root: number = indexMap.get(preorder[preorder_root]) as number
        const root = new TreeNode(preorder[preorder_root])
        const size_left_subtree = inorder_root - inorder_left
        root.left = builder(preorder, inorder, preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1)
        root.right = builder(preorder, inorder, preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right)
        return root
    }
    const len = preorder.length
    for (let i = 0; i < len; i++) {
        indexMap.set(inorder[i], i)
    }
    return builder(preorder, inorder, 0, len - 1, 0, len - 1)
};