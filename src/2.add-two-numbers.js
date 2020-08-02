/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2, extra = 0) {
  let sumVal = l1.val + l2.val + extra

  let val = sumVal % 10
  extra = (sumVal - val) / 10

  let nodeList = new ListNode(val)
  if (l1.next && l2.next) {
    nodeList.next = addTwoNumbers(l1.next, l2.next, extra)
  } else if (l1.next) {
    nodeList.next = addTwoNumbers(l1.next, new ListNode(0), extra)
  } else if (l2.next) {
    nodeList.next = addTwoNumbers(new ListNode(0), l2.next, extra)
  } else if (extra) {
    nodeList.next = new ListNode(extra)
  }

  return nodeList
}

test('default', () => {})
