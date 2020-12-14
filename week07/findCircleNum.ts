function findCircleNum(M: number[][]): number {
  const parent = new Array(M.length).fill(-1)
  for (let i = 0, len = M.length; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (M[i][j] === 1 && i !== j) {
        union(parent, i, j)
      }
    }
  }
  return parent.filter((val) => val === -1).length
}

function find(parent: number[], i: number): number {
  if (parent[i] === -1) return i
  return find(parent, parent[i])
}

function union(parent: number[], x: number, y: number): void {
  const xset = find(parent, x)
  const yset = find(parent, y)
  if (xset !== yset) parent[xset] = yset
}
