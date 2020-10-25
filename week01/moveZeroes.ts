function moveZeroes(nums: number[]): void {
  nums.sort((a, b) => (b ? 0 : -1))
}
