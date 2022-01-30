/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next) return;
  
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next
  }

  let middleNode = slowPointer
  let afterMiddleNode = slowPointer.next

  while (afterMiddleNode && afterMiddleNode.next) {
    let nextNode = afterMiddleNode.next
    afterMiddleNode.next = nextNode.next
    nextNode.next = middleNode.next
    middleNode.next = nextNode
  }

  slowPointer = head;
  fastPointer = middleNode.next
  
  while (fastPointer) {
    middleNode.next = fastPointer.next
    fastPointer.next = slowPointer.next
    slowPointer.next = fastPointer
    slowPointer = fastPointer.next
    fastPointer = middleNode.next
  }
};