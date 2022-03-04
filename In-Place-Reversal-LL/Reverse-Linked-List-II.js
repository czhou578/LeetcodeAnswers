/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
  // if (!head || !head.next) return head

  let dummyNode = new ListNode(0)
  dummyNode.next = head
  let pointerHead = head;
  let previous = dummyNode //save previous 

  for (let i = 1; i < left; i++) { //traverse to the exact place to begin reversal
    pointerHead = pointerHead.next
    previous = previous.next
  }

  for (let index = 0; index < right - left; index++) {
    let temp = pointerHead.next
    pointerHead.next = temp.next
    temp.next = previous.next
    previous.next = temp    
  }

  return dummyNode.next
  // while(pointerHead) {
  //   if (counter >= left && counter <= right) {
  //     let nextNode = pointerHead.next
  //     pointerHead.next = previous
  //     previous = pointerHead;
  //     pointerHead = nextNode
      
  //   } else {
  //     pointerHead = pointerHead.next
  //     previous = previous.next
  //     counter++
  //   }
  // }

    
};

/**
 * We use dummy node because of an edge case where if the swap is starting
 * from the first node. 
 * 
 * 
 */