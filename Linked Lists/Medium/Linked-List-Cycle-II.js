/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  if (!head || !head.next) return null

  let fastPointer = head;
  let slowPointer = head;

  let pointer = head;
  let index = 0;

  while(fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next
    slowPointer = slowPointer.next;

    if (fastPointer === slowPointer) break;
  }

  if (fastPointer !== slowPointer) return null;

  while(slowPointer !== pointer) {
    pointer = pointer.next
    slowPointer = slowPointer.next
    index++;
  }

  return slowPointer


    
};