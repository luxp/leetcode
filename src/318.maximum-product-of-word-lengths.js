/*
 * @lc app=leetcode id=318 lang=javascript
 *
 * [318] Maximum Product of Word Lengths
 *
 * https://leetcode.com/problems/maximum-product-of-word-lengths/description/
 *
 * algorithms
 * Medium (48.77%)
 * Total Accepted:    98.2K
 * Total Submissions: 191.9K
 * Testcase Example:  '["abcw","baz","foo","bar","xtfn","abcdef"]'
 *
 * Given a string array words, find the maximum value of length(word[i]) *
 * length(word[j]) where the two words do not share common letters. You may
 * assume that each word will contain only lower case letters. If no such two
 * words exist, return 0.
 *
 * Example 1:
 *
 *
 * Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
 * Output: 16
 * Explanation: The two words can be "abcw", "xtfn".
 *
 * Example 2:
 *
 *
 * Input: ["a","ab","abc","d","cd","bcd","abcd"]
 * Output: 4
 * Explanation: The two words can be "ab", "cd".
 *
 * Example 3:
 *
 *
 * Input: ["a","aa","aaa","aaaa"]
 * Output: 0
 * Explanation: No such pair of words.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= words.length <= 10^3
 * 0 <= words[i].length <= 10^3
 * words[i] consists only of lowercase English letters.
 *
 *
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let wordsCount = words.length
  let parsedWords = parseWords(words)
  let maxProductValue = 0
  for (let i = 0; i < wordsCount; ++i) {
    for (let j = i + 1; j < wordsCount; ++j) {
      let w1 = parsedWords[i]
      let w2 = parsedWords[j]
      let productValue = w1.length * w2.length
      if (productValue > maxProductValue) {
        if (checkIsPair(w1, w2)) {
          maxProductValue = productValue
        }
      }
    }
  }
  return maxProductValue
}

test('maxProduct', () => {
  expect(maxProduct(['a', 'aa', 'aaa', 'aaaa'])).toBe(0)
  expect(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'])).toBe(16)
  expect(maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'])).toBe(4)
})

function parseWords(words) {
  return words.map((word) => {
    let charMap = getCharMap(word)
    let charList = Object.keys(charMap)
    return {
      length: word.length,
      charCount: charList.length,
      charList,
      charMap,
    }
  })
}
test('parseWords', () => {
  expect(parseWords(['a', 'aab'])).toEqual([
    {
      length: 1,
      charCount: 1,
      charList: ['a'],
      charMap: {
        a: true,
      },
    },
    {
      length: 3,
      charCount: 2,
      charList: ['a', 'b'],
      charMap: {
        a: true,
        b: true,
      },
    },
  ])
})

function getCharMap(word) {
  let charMap = {}
  for (let char of word) {
    charMap[char] = true
  }
  return charMap
}
test('getCharMap', () => {
  expect(getCharMap('aabaab')).toEqual({
    a: true,
    b: true,
  })
})

function checkIsPair(w1, w2) {
  if (w1.charCount > w2.charCount) {
    ;[w2, w1] = [w1, w2]
  }
  return !w1.charList.some((charKey) => w2.charMap[charKey])
}
test('checkIsPair', () => {
  let w1 = {
    length: 1,
    charCount: 1,
    charList: ['a'],
    charMap: {
      a: true,
    },
  }
  let w2 = {
    length: 2,
    charCount: 2,
    charList: ['a', 'b'],
    charMap: {
      a: true,
      b: true,
    },
  }
  let w3 = {
    length: 2,
    charCount: 2,
    charList: ['c', 'b'],
    charMap: {
      c: true,
      b: true,
    },
  }
  expect(checkIsPair(w1, w1)).toBe(false)
  expect(checkIsPair(w2, w1)).toBe(false)
  expect(checkIsPair(w3, w1)).toBe(true)
})
