/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let allNum = nums1.concat(nums2);
  allNum.sort(sortFunc);
  if (allNum.length % 2) {
    return allNum[(allNum.length - 1) / 2];
  } else {
    return (allNum[allNum.length / 2] + allNum[allNum.length / 2 - 1]) / 2;
  }
};

function sortFunc(a, b) {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}
