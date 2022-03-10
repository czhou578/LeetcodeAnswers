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
//  var deleteDuplicates = function(head) {
//   if (!head || !head.next) return head

//   let dummyHead = new ListNode(0)
//   dummyHead.next = head

//   let previous = dummyHead
//   let current = head

//   while(current.next) {
//     console.log('current: ' + current.val);

//     while (current.next.val === current.val) {
//       current.next = current.next.next
//       console.log('current.next.val: ' + current.next.val);
//       previous.next = current.next
//       console.log('previous.next.val: ' + previous.next.val);
//     }

//     console.log(previous.next.val);

//     previous = previous.next
//     current = current.next
//   }

//   return dummyHead.next
// };

var deleteDuplicates = function(head) {
  if (!head || !head.next) return head

  let dummyHead = new ListNode(0)
  dummyHead.next = head

  let previous = dummyHead
  let current = head

  while(current) {
    console.log('current: ' + current.val);

    while (current.next && current.next.val === current.val) {
      current = current.next
    }

    if (previous.next == current) { //if previous and current are next to each other, previous points to same as current
      previous = current
    } else {
      previous.next = current.next
      console.log('previous next: ' + previous.next.val);
      console.log('current: ' + current.val);
    }
    current = current.next

  }

  return dummyHead.next
};

/**
 * KNOW HOW THE LINKS WORK. REASSIGNING LINKS BREAKS THE ORIGINAL TARGET. WHERE IT 
 * LANDS DOESN'T MATTER, EVEN IF TWO LINKS ARE POINTING AT THE FINAL TARGET.
 */
