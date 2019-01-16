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
  let stringArray = s.split('')
  let x = 0
  let y = 0
  let maxY = numRows - 1
  let yStep = 0
  let xStep = 0
  for (let i = 0, len = stringArray.length; i < len; ++i) {
    let word = stringArray.shift()
    result[x] = result[x] || []
    result[x][y] = word
    if (y >= maxY) {
      yStep = -1
    }
    if (y <= 0) {
      yStep = 1
    }

    if (yStep < 0) {
      xStep = 1
    } else {
      xStep = 0
    }
    y += yStep
    x += xStep
  }

  return print(result, numRows)
};


function print (array, numRows) {
  let result = [];
  for(let i = 0; i < numRows; ++i) {
    result[i] = array[i].map((item) => item || ' ').join('')
  }
  return result.join('\n')
}


