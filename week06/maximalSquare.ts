function maximalSquare(matrix: string[][]): number {
  let maxSide = 0
  if (matrix.length === 0 || matrix[0].length === 0) return maxSide
  const rows = matrix.length
  const columns = matrix[0].length
  let dp: number[][] = new Array(rows).fill(new Array(columns).fill(0))
  for (let i = 0; i < rows; i++) {
    for (let j = 0; i < columns; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        maxSide = Math.max(maxSide, dp[i][j])
      }
    }
  }
  return maxSide ** 2
}
