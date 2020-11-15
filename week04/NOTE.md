学习笔记

### 搜索 - 遍历
* 每个节点都要访问一次
* 每个节点仅仅要访问一次
* 对于节点的访问顺序不限
    * 深度优先：DFS
    * 广度优先：BFS

DFS模板：
``` JavaScript
//JavaScript
const visited = new Set()
const dfs = node => {
  if (visited.has(node)) return
  visited.add(node)
  dfs(node.left)
  dfs(node.right)
}
```

BFS模板：
```JavaScript
//JavaScript
const bfs = (root) => {
  let result = [], queue = [root]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      level.push(node.val) 
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(level)
  }
  return result
};
```

### 贪心算法 Greedy
* 贪心算法是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法
* 贪心算法与动态规划的不同之处在于它对每个子问题的解决方案都做出选择，不能回退。动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能
* 区别
    * 贪心：当下做局部最优判断
    * 回溯：能够回退
    * 动态规划：最优判断 + 回退

### 二分查找
* 前提
    * 目标函数单调性（单调递增或递减）
    * 存在上下界（bounded）
    * 能够通过索引访问（index accessible）

