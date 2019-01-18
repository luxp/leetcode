/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
 *
 * algorithms
 * Hard (32.52%)
 * Total Accepted:    133.7K
 * Total Submissions: 410.8K
 * Testcase Example:  '[3,3,5,0,0,3,1,4]'
 *
 * Say you have an array for which the ith element is the price of a given
 * stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete at most two
 * transactions.          
 * 
 * Note: You may not engage in multiple transactions at the same time (i.e.,
 * you must sell the stock before you buy again).
 * 
 * Example 1:
 * 
 * 
 * Input: [3,3,5,0,0,3,1,4]
 * Output: 6
 * Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit
 * = 3-0 = 3.
 * Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 =
 * 3.
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit
 * = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you
 * are
 * engaging multiple transactions at the same time. You must sell before buying
 * again.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxValue = 0
  for (let i = 0, len = prices.length; i < len; ++i) {
    let profit
    if (i < 2) {
      profit = getMaxProfit(prices)
      if (profit === 0) {
        return 0
      }
    } else {
      let leftProfit = getMaxProfit(prices.slice(0, i))
      let rightProfit =  getMaxProfit(prices.slice(i, len))
      profit = leftProfit + rightProfit
      if (rightProfit === 0 && prices[i - 1] >= prices[i]) {
        return Math.max(maxValue, profit)        
      }
    }
    if (profit > maxValue) {
      maxValue = profit
    }
  }
  return maxValue
};

function getMaxProfit (prices) {
  let maxProfit = 0
  let len = prices.length
  let leftMin = prices[0]
  let rightMax = Math.max(...prices.slice(1, len))
  for (let i = 1; i < len; ++i) {
    if (prices[i - 1] < leftMin) {
      leftMin = prices[i - 1]
    }
    if (prices[i - 1] === rightMax) {
      rightMax = Math.max(...prices.slice(i, len))
    }
    let profit = rightMax - leftMin
    if (profit > maxProfit) {
      maxProfit = profit
    }
  }
  return maxProfit
}

test('getMaxProfit', () => {
  expect(getMaxProfit([3,3,5,0,0])).toBe(2)
  expect(getMaxProfit([1,2,3])).toBe(2)
})

test('maxProfit', () => {
  expect(maxProfit([4,1,2])).toBe(1)
  expect(maxProfit([1,2])).toBe(1)
  expect(maxProfit([7,6,4,3,1])).toBe(0)
  expect(maxProfit([1,2,3,4,5])).toBe(4)
  expect(maxProfit([3,3,5,0,0,3,1,4])).toBe(6)
})