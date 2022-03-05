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
  // let counter = 0;

  while(tail.next) { //while node exists, traverse to end
    tail = tail.next
    length++
  } //tail is at end of list

  if (length === k || k == 0 || k % length == 0) return head //cases
  if (length < k) {
    k = k % length
  }
  // k = length - k - 1

  // console.log(numTimesToTraverse)
  // console.log(counter);

  // while(counter < numTimesToTraverse) { //counter smaller then times to traverse
  //   pointerHead = pointerHead.next
  //   counter++
  // }

  for (let i = 0; i < length - k - 1; i++) {
    pointerHead = pointerHead.next
  }

  console.log(pointerHead.val);

  let temp = pointerHead.next
  pointerHead.next = null
  tail.next = head;

  // let temp = pointer
  // console.log('temp: ' + temp.val);
  // previous.next = null
  // temp.next = dummyHead.next
  // console.log('temp next: ' + temp.next.val);
  // dummyHead.next = temp
  // console.log('dummyhead next: ' + dummyHead.next.val);
  // counter++

  return temp

};