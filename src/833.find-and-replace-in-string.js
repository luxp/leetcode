/*
 * @lc app=leetcode id=833 lang=javascript
 *
 * [833] Find And Replace in String
 *
 * https://leetcode.com/problems/find-and-replace-in-string/description/
 *
 * algorithms
 * Medium (44.48%)
 * Total Accepted:    14.6K
 * Total Submissions: 32.7K
 * Testcase Example:  '"abcd"\n[0, 2]\n["a", "cd"]\n["eee", "ffff"]'
 *
 * To some string S, we will perform some replacement operations that replace
 * groups of letters with new ones (not necessarily the same size).
 *
 * Each replacement operation has 3 parameters: a starting index i, a source
 * word x and a target word y.  The rule is that if x starts at position i in
 * the original string S, then we will replace that occurrence of x with y.  If
 * not, we do nothing.
 *
 * For example, if we have S = "abcd" and we have some replacement operation i
 * = 2, x = "cd", y = "ffff", then because "cd" starts at position 2 in the
 * original string S, we will replace it with "ffff".
 *
 * Using another example on S = "abcd", if we have both the replacement
 * operation i = 0, x = "ab", y = "eee", as well as another replacement
 * operation i = 2, x = "ec", y = "ffff", this second operation does nothing
 * because in the original string S[2] = 'c', which doesn't match x[0] = 'e'.
 *
 * All these operations occur simultaneously.  It's guaranteed that there won't
 * be any overlap in replacement: for example, S = "abc", indexes = [0, 1],
 * sources = ["ab","bc"] is not a valid test case.
 *
 * Example 1:
 *
 *
 * Input: S = "abcd", indexes = [0,2], sources = ["a","cd"], targets =
 * ["eee","ffff"]
 * Output: "eeebffff"
 * Explanation: "a" starts at index 0 in S, so it's replaced by "eee".
 * "cd" starts at index 2 in S, so it's replaced by "ffff".
 *
 *
 * Example 2:
 *
 *
 * Input: S = "abcd", indexes = [0,2], sources = ["ab","ec"], targets =
 * ["eee","ffff"]
 * Output: "eeecd"
 * Explanation: "ab" starts at index 0 in S, so it's replaced by "eee".
 * "ec" doesn't starts at index 2 in the original S, so we do nothing.
 *
 *
 * Notes:
 *
 *
 * 0 <= indexes.length = sources.length = targets.length <= 100
 * 0 < indexes[i] < S.length <= 1000
 * All characters in given inputs are lowercase letters.
 *
 *
 *
 *
 */
/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
  let result = []
  let sortedIndex = sortIndexes(indexes, sources, targets)
  result.push(S.substring(0, sortedIndex[0].index))
  for (let i = 0; i < sortedIndex.length; ++i) {
    let {index, source, target} = sortedIndex[i]
    let sourceLen = source.length
    let toReplace = S.substr(index, sourceLen)
    if (toReplace === source) {
      result.push(target)
    } else {
      result.push(toReplace)
    }
    if (sortedIndex[i + 1]) {
      result.push(S.substring(index + sourceLen, sortedIndex[i + 1].index))
    } else {
      result.push(S.substring(index + sourceLen, S.length))
    }
  }
  return result.join('')
}

function sortIndexes (indexes, sources, targets) {
  return indexes.map((index, i) => {
    return {
      index,
      source: sources[i],
      target: targets[i]
    }
  }).sort((a, b) => {
    if (a.index === b.index) return 0
    if (a.index > b.index) return 1
    if (a.index < b.index) return -1
  })
}

test('sourceIndex', () => {
  expect(sortIndexes([3,5,1], [3,5,1], [3,5,1])).toEqual([
    {index: 1, source:1, target: 1},
    {index: 3, source:3, target: 3},
    {index: 5, source:5, target: 5}
  ])
})

test('default', () => {
  expect(findReplaceString('abcd', [0,2], ["a","cd"], ["eee","ffff"])).toBe('eeebffff')
  expect(findReplaceString('abcd', [0,2], ["ab","ec"], ["eee","ffff"])).toBe('eeecd')
})

test('default2', () => {
  expect(findReplaceString('vmokgggqzp', [3,5,1], ["kg","ggq", "mo"], ["s","so", "bfr"])).toBe('vbfrssozp')
})