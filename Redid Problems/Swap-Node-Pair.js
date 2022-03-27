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

/**
 * Use recursion to solve swapPairs
 * What I didn't get: couldn't picture the swapping of two nodes. Think of 3 people in line, and the person at the back reaches out to grab the
 * hand of the first in line. The person in the middle reaches back to grab the back person's free hand and lets go of the hand of the person at the front.
 * 
 * 
 * Takdaways: Recursion is always an option! 
 */