/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let left = dummy;
  let right = head;

  while (right && n > 0) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return dummy.next;
};
/**
 * Time complexity O(n)
 * space complexity O(1) since just creating 3 pointers
 * Using dummy head (addition or deletion)
 */
