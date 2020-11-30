function numDecodings(s: string): number {
  if (s[0] === '0') return 0
  let pre = 1
  let cur = 1
  for (let i = 1, len = s.length; i < len; i++) {
    const tmp = cur
    if (s[i] === '0') {
      if (['1', '2'].indexOf(s[i - 1]) > -1) {
        cur = pre
      } else {
        return 0
      }
    } else if (
      ['1', '2'].indexOf(s[i - 1]) > -1 &&
      Number(s[i]) >= 1 &&
      Number(s[i]) <= 6
    ) {
      cur += pre
    }
    pre = tmp
  }
  return cur
}
