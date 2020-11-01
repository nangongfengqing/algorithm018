function twoSum(nums: number[], target: number): number[] | void {
  const map: Map<number, number> = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]) as number, i]
    }
    map.set(nums[i], i)
  }
}
