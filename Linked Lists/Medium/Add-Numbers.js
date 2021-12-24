/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let previousNode = new ListNode()
  const headNode = previousNode;
  
  while (l1 || l2 || carry) {
    let value1 = 0;
    let value2 = 0;

    if (l1) {
      value1 = l1.val;
      l1 = l1.next;
    }

    if (l2) {
      value2 = l2.val;
      l2 = l2.next;
    }

    const sum = value1 + value2 + carry 
    carry = Math.floor(sum / 10)
    const digit = sum % 10;
    const currentNode = new ListNode(digit)
    previousNode.next = currentNode;
    previousNode = currentNode

  }

  return headNode.next
};