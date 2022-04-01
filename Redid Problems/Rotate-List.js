/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
  // let dummyHead = new ListNode(0)
  // dummyHead.next = head

  //if k is equal to length of list, then return length of list
  // use mod if k is > length of list, CARRYING OVER!

  // let previous = dummyHead
  if (!head || !head.next) return head

  let pointerHead = head;
  let tail = head
  let length = 1;

  while(tail.next) { //while node exists, traverse to end
    tail = tail.next
    length++
  } //tail is at end of list

  if (length === k || k == 0 || k % length == 0) return head //cases
  if (length < k) {
    k = k % length
  }

  for (let i = 0; i < length - k - 1; i++) {
    pointerHead = pointerHead.next
  }

  let temp = pointerHead.next
  pointerHead.next = null
  tail.next = head;

  return temp

};

/**
 * Run Time: O(n)
 * Space Time O(1)
 */