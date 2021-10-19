/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) return null
  
  let firstPointer = headA
  let secondPointer = headB
  
  while (firstPointer !== secondPointer) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
      
      if (firstPointer === secondPointer) {
          return firstPointer;
      }
      
      if (firstPointer === null) {
          firstPointer = headB
      }
      
      if (secondPointer === null) {
          secondPointer = headA
      }
      
  }
  
  return firstPointer;
};