function reverseStr(s: string, k: number): string {
  let ans = ''
  while (s.length) {
    ans += s.substr(0, k).split('').reverse().join('')
    if (k <= s.length) {
      ans += s.substr(k, k)
    }
    s = s.substr(2 * k)
  }
  return ans
}
