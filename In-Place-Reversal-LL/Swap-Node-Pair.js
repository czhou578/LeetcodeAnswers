/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  if (!head) return null
  
  if (!head.next) return head

  const nextHead = head.next.next;
  head.next.next = head;
  head = head.next;
  head.next.next = swapPairs(nextHead)

  return head


};