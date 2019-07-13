/*
 * @lc app=leetcode id=885 lang=javascript
 *
 * [885] Spiral Matrix III
 *
 * https://leetcode.com/problems/spiral-matrix-iii/description/
 *
 * algorithms
 * Medium (63.38%)
 * Total Accepted:    9.6K
 * Total Submissions: 14.8K
 * Testcase Example:  '1\n4\n0\n0'
 *
 * On a 2 dimensional grid with R rows and C columns, we start at (r0, c0)
 * facing east.
 *
 * Here, the north-west corner of the grid is at the first row and column, and
 * the south-east corner of the grid is at the last row and column.
 *
 * Now, we walk in a clockwise spiral shape to visit every position in this
 * grid.
 *
 * Whenever we would move outside the boundary of the grid, we continue our
 * walk outside the grid (but may return to the grid boundary later.)
 *
 * Eventually, we reach all R * C spaces of the grid.
 *
 * Return a list of coordinates representing the positions of the grid in the
 * order they were visited.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: R = 1, C = 4, r0 = 0, c0 = 0
 * Output: [[0,0],[0,1],[0,2],[0,3]]
 *
 *
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: R = 5, C = 6, r0 = 1, c0 = 4
 * Output:
 * [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
 *
 *
 *
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= R <= 100
 * 1 <= C <= 100
 * 0 <= r0 < R
 * 0 <= c0 < C
 *
 *
 *
 *
 */
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
  let currentPosition = [r0, c0]
  let result = [[r0, c0]]
  let maxStepLength = (Math.max(R - r0, C - c0, r0, c0) + 1) * 2
  for (let stepLength = 0; stepLength <= maxStepLength; ) {
    for (let directionIndex = 0; directionIndex < 4; ++directionIndex) {
      if (directionIndex % 2 === 0) {
        ++stepLength
      }
      for (let i = 1; i <= stepLength; ++i) {
        currentPosition = getNextPosition(currentPosition, directionIndex)
        let [r, c] = currentPosition
        if (r < R && c < C && r >= 0 && c >= 0) {
          result.push([r, c])
        }
      }
    }
  }
  return result
}

function getNextPosition(currentPosition, directionIndex) {
  let directionList = [[0, 1], [1, 0], [0, -1], [-1, 0]] // 模拟前进的方向
  let direction = directionList[directionIndex]
  currentPosition[0] += direction[0]
  currentPosition[1] += direction[1]
  return currentPosition
}

test('getNextPosition', () => {
  let nextPosition = getNextPosition([0, 0], 0)
  expect(nextPosition).toEqual([0, 1])
})

test('spiralMatrixIII', () => {
  expect(spiralMatrixIII(3, 3, 2, 0)).toEqual([
    [2, 0],
    [2, 1],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 2],
    [0, 0],
    [0, 1],
    [0, 2]
  ])
  expect(spiralMatrixIII(1, 4, 0, 0)).toEqual([[0, 0], [0, 1], [0, 2], [0, 3]])
  expect(spiralMatrixIII(5, 6, 1, 4)).toEqual([
    [1, 4],
    [1, 5],
    [2, 5],
    [2, 4],
    [2, 3],
    [1, 3],
    [0, 3],
    [0, 4],
    [0, 5],
    [3, 5],
    [3, 4],
    [3, 3],
    [3, 2],
    [2, 2],
    [1, 2],
    [0, 2],
    [4, 5],
    [4, 4],
    [4, 3],
    [4, 2],
    [4, 1],
    [3, 1],
    [2, 1],
    [1, 1],
    [0, 1],
    [4, 0],
    [3, 0],
    [2, 0],
    [1, 0],
    [0, 0]
  ])
})
