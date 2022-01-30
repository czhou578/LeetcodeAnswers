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

/**
 * Strategy: use two pointers, and a third pointer to find where the cycle begins
 * 
 * I didn't use the extra pointer to traverse the linked list and eventually, the slow pointer
 * will meet the extra pointer and where they intersect will be the beginning of the cycle.
 * 
 * check whether fast and slow pointers are equal because if so, then while loop will stop and 
 * return null check will be satisfied
 * 
 * 
 */