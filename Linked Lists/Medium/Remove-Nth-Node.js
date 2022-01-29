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
 var removeNthFromEnd = function(head, n) {
  let dummyHead = new ListNode(-Infinity)
  dummyHead.next = head;
  let resultHead = dummyHead
  let counter = 0 //for tracking n
  let tail = head;

  while(counter < n) {
    tail = tail.next
    counter++
  }

  let removeNode = head;
  let previous = dummyHead;

  while(tail) {
    tail = tail.next
    removeNode = removeNode.next
    previous = previous.next
  }

  previous.next = removeNode.next
  
  return resultHead.next
  // let previousPointer = dummyHead
  // let removePointer = head


    
};

/**
 * Time complexity O(n)
 * space complexity O(1) since just creating 3 pointers
 * Using dummy head (addition or deletion)
*/