/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function findContentChildren(g: number[], s: number[]): number {
  if (!g.length || !s.length) return 0
  const compareFn = (a: number, b: number) => a - b
  g.sort(compareFn)
  s.sort(compareFn)
  let gi = 0,
    si = 0
  while (gi < g.length && si < s.length) {
    if (g[gi] <= s[si]) {
      gi++
    }
    si++
  }
  return gi
}
