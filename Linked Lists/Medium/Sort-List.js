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
 var sortList = function(head) {
  if (!head) return null

  let tempStore = []
  let pointer = head 

  while (pointer) {
    tempStore.push(pointer.val)
    pointer = pointer.next
  }

  tempStore.sort((a, b) => a - b)

  let newHead = new ListNode(tempStore[0])
  let pointer2 = newHead

  for (let i = 1; i < tempStore.length; i++) {
    pointer2.next = new ListNode(tempStore[i])
    pointer2 = pointer2.next
  }

  return pointer2
};