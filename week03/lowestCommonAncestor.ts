/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * @param root 
 * @param p 
 * @param q 
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let ans: TreeNode | null = null
    const dfs = (node: TreeNode | null, p: TreeNode | null, q: TreeNode | null): boolean => {
        if (node == null) return false
        const l = dfs(node.left, p, q)
        const r = dfs(node.right, p, q)
        if ((l && r) || (((node as TreeNode).val === (p as TreeNode).val || (node as TreeNode).val === (q as TreeNode).val) && (p || q))) {
            ans = node
        }
        return l || r || ((node as TreeNode).val === (p as TreeNode).val || (node as TreeNode).val === (q as TreeNode).val)
    }
    dfs(root, p, q)
    return ans
};