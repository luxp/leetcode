/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (29.97%)
 * Total Accepted:    270.9K
 * Total Submissions: 903.8K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 *
 * string convert(string s, int numRows);
 *
 * Example 1:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 *
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let result = []
  let x = 0
  let y = -1
  let maxY = numRows - 1
  let yStep = 1
  let xStep = 0
  for (let i = 0, len = s.length; i < len; ++i) {
    let word = s[i]
    if (y === maxY) {
      yStep = -1
    }
    if (yStep === -1 && y === 0) {
      yStep = 1
    }

    if (yStep === -1) {
      xStep = 1
    } else {
      xStep = 0
    }
    y += yStep
    x += xStep
    result[y] = result[y] || []
    result[y][x] = word
  }

  return print(result, numRows)
}

test('covert', () => {
  let result = convert('PAYPALISHIRING', 3)
  expect(result).toBe('PAHNAPLSIIGYIR')
  expect(convert('ABC', 1)).toBe('ABC')
})

function print(array) {
  let result = ''
  for (let i = 0; i < array.length; ++i) {
    result += array[i].join('')
  }
  return result
}

test('print', () => {
  expect(print([[1]])).toBe('1')
  expect(print([[1, 2]])).toBe('12')
  expect(print([[1], [2]])).toBe('12')
})

// function test () {}
