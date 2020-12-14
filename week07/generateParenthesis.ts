function generateParenthesis(n: number): string[] {
  const cache: string[][] = []
  const generate = (n: number) => {
    if (cache[n]) return cache[n]
    const ans: string[] = []
    if (n === 0) {
      ans.push('')
    } else {
      for (let i = 0; i < n; i++) {
        for (let left of generate(i)) {
          for (let right of generate(n - 1 - i)) {
            ans.push(`(${left})${right}`)
          }
        }
      }
    }
    cache[n] = ans
    return ans
  }
  return generate(n)
}
