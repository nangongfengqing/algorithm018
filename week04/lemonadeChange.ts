/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function lemonadeChange(bills: number[]): boolean {
  let five = 0,
    ten = 0
  for (let bill of bills) {
    switch (bill) {
      case 5:
        five++
        break
      case 10:
        if (five === 0) return false
        five--
        ten++
        break
      case 20:
        if (five > 0 && ten > 0) {
          five--
          ten--
        } else if (five >= 3) {
          five -= 3
        } else {
          return false
        }
        break
    }
  }
  return true
}
