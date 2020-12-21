function firstUniqChar(s: string): number {
  const charSet: Set<string> = new Set()
  for (let i = 0, len = s.length; i < len; i++) {
    if (charSet.has(s[i])) continue
    if (i === s.lastIndexOf(s[i])) return i
    charSet.add(s[i])
  }
  return -1
}
