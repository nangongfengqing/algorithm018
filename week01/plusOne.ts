function plusOne(digits: number[]): number[] {
  let len = digits.length
  let carry = 1
  while (carry === 1) {
    if (len - 1 < 0) {
      digits.unshift(1)
      carry = 0
      break
    }
    if (digits[len - 1] + carry > 9) {
      digits[len - 1] = digits[len - 1] + carry - 10
    } else {
      digits[len - 1] = digits[len - 1] + carry
      carry = 0
    }
    len--
  }
  return digits
}
