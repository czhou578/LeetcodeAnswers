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
 var reverseList = function(head) {
  let previous = null;

  while(head) {
    let nextNode = head.next
    head.next = previous
    previous = head;
    head = nextNode;
  }

  return previous
};

/**
 * Have 32pointers, previous,current, and break links
 * Time O(n) because we are going through the list once
 * Space O(1) 
 */