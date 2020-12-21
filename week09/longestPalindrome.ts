function longestPalindrome(s: string): string {
  const len = s.length
  let max = len
  while (max > 0) {
    for (let i = 0; i + max <= len; i++) {
      const str = s.substr(i, max)
      if (str === str.split('').reverse().join('')) {
        return str
      }
    }
    max--
  }
  return ''
}
