/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numsMap = {}
  nums = nums.map((num, index) => {
    return {
      value: num,
      index
    }
  })
  nums = nums.sort(
    (a, b) => (a.value - b.value > 0 ? 1 : a.value === b.value ? 0 : -1)
  )

  let len = nums.length
  for (let i = 0, j = len - 1; i < j;) {
    let sum = nums[i].value + nums[j].value
    if (sum === target) {
      return [nums[i].index, nums[j].index]
    } else if (sum > target) {
      --j
    } else {
      ++i
    }
  }
  return null
}

test('default', () => {})