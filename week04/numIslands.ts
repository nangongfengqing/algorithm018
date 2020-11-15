/**
 * 时间复杂度：O(RC) R、C分别为行、列数
 * 空间复杂度：O(RC)
 */
function numIslands(grid: string[][]): number {
  let nr = grid.length
  if (!nr) return 0
  let nc = grid[0].length

  const dfs = (grid: string[][], r: number, c: number) => {
    let nr = grid.length
    let nc = grid[0].length

    grid[r][c] = '0'
    if (r - 1 >= 0 && grid[r - 1][c] == '1') dfs(grid, r - 1, c)
    if (r + 1 < nr && grid[r + 1][c] == '1') dfs(grid, r + 1, c)
    if (c - 1 >= 0 && grid[r][c - 1] == '1') dfs(grid, r, c - 1)
    if (c + 1 < nc && grid[r][c + 1] == '1') dfs(grid, r, c + 1)
  }

  let num_islands = 0
  for (let r = 0; r < nr; ++r) {
    for (let c = 0; c < nc; ++c) {
      if (grid[r][c] == '1') {
        ++num_islands
        dfs(grid, r, c)
      }
    }
  }

  return num_islands
}
