/*
 * @lc app=leetcode id=467 lang=javascript
 *
 * [467] Unique Substrings in Wraparound String
 *
 * https://leetcode.com/problems/unique-substrings-in-wraparound-string/description/
 *
 * algorithms
 * Medium (33.38%)
 * Total Accepted:    17K
 * Total Submissions: 50.9K
 * Testcase Example:  '"a"'
 *
 * Consider the string s to be the infinite wraparound string of
 * "abcdefghijklmnopqrstuvwxyz", so s will look like this:
 * "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
 *
 * Now we have another string p. Your job is to find out how many unique
 * non-empty substrings of p are present in s. In particular, your input is the
 * string p and you need to output the number of different non-empty substrings
 * of p in the string s.
 *
 * Note: p consists of only lowercase English letters and the size of p might
 * be over 10000.
 *
 * Example 1:
 *
 * Input: "a"
 * Output: 1
 *
 * Explanation: Only the substring "a" of string "a" is in the string s.
 *
 *
 *
 * Example 2:
 *
 * Input: "cac"
 * Output: 2
 * Explanation: There are two substrings "a", "c" of string "cac" in the string
 * s.
 *
 *
 *
 * Example 3:
 *
 * Input: "zab"
 * Output: 6
 * Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of
 * string "zab" in the string s.
 *
 *
 */
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  let subStrMap = {}
  let subStrLen = 1
  for (let i = 0, len = p.length; i < len; ++i) {
    if (p[i + 1]) {
    }
    if (i > 0 && p[i - 1]) {
      let charCodeDiff = p[i].charCodeAt(0) - p[i - 1].charCodeAt(0)
      if (charCodeDiff === 1 || charCodeDiff === -25) {
        subStrLen++
      } else {
        subStrLen = 1
      }
    } else {
      subStrLen = 1
    }
    subStrMap[p[i]] = Math.max(subStrMap[p[i]] || 0, subStrLen)
  }

  let result = 0
  Object.values(subStrMap).forEach((value) => {
    result += value
  })
  return result
}

test('default', () => {
  expect(findSubstringInWraproundString('a')).toBe(1)
  expect(findSubstringInWraproundString('cac')).toBe(2)
  expect(findSubstringInWraproundString('zab')).toBe(6)
})
