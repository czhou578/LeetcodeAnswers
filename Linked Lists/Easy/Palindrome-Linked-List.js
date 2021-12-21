/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  let fastHead = head;
  let slowHead = head;
  
  while (fastHead != null && fastHead.next != null) {
      slowHead = slowHead.next;
      fastHead = fastHead.next.next;
  }
  
  fastHead = head;
  slowHead = reverse(slowHead)
  
  while (slowHead !== null) {
      if (slowHead.val !== fastHead.val) {
          return false
      }
      
      slowHead = slowHead.next;
      fastHead = fastHead.next;
  }
  
  return true;
  
};

function reverse(head) {
  let previousNode = null;
  while (head) {
      let nextNode = head.next
      head.next = previousNode
      previousNode = head;
      head = nextNode;
  }
  return previousNode
}