function isAnagram(s: string, t: string): boolean {
  const map: Map<string, number> = new Map()
  for (let item of s) {
    let cnt: number | undefined = map.get(item)
    map.set(item, cnt ? cnt + 1 : 1)
  }
  for (let item of t) {
    let cnt: number | undefined = map.get(item)
    if (cnt === undefined) return false
    map.set(item, cnt - 1)
  }
  return [...map.values()].every((val) => val === 0)
}
