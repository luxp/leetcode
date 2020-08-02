/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = s.length
  let maxLen = 0
  let charStartDic = {}
  let start = -1
  for (let i = 0; i < len; ++i) {
    let c = s[i]
    if (charStartDic[c] > start) {
      //有重复
      start = charStartDic[c]
    }
    maxLen = Math.max(i - start, maxLen)
    charStartDic[c] = i
  }
  return maxLen
}

test('default', () => {})
