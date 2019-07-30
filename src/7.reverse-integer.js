/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.96%)
 * Total Accepted:    571.4K
 * Total Submissions: 2.3M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *
 * Input: 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: 120
 * Output: 21
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isNegative = x < 0
  if (isNegative) {
    x = -x
  }
  x += ''
  x = +x
    .split('')
    .reverse()
    .join('')
  if (x >= 2147483648) {
    return 0
  }
  if (isNegative) {
    return -x
  } else {
    return +x
  }
}

test('reverse', () => {
  expect(reverse(12)).toBe(21)
  expect(reverse(-12)).toBe(-21)
  expect(reverse(-120)).toBe(-21)
  expect(reverse(1534236469)).toBe(0)
  expect(reverse(-2147483412)).toBe(-2143847412)
})
