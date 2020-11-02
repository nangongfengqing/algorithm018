function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map()
  for (let str of strs) {
    const key = [...str].sort().join('')
    let val = map.get(key)
    val = val ? [...val, str] : [str]
    map.set(key, val)
  }
  return [...map.values()]
}
