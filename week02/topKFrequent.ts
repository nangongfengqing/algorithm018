function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map()
  for (let num of nums) {
    const cnt = map.get(num)
    map.set(num, cnt ? cnt + 1 : 1)
  }
  return [...map]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((val) => val[0])
}
