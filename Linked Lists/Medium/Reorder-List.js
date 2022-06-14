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
var reorderList = function (head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  let secondHalf = slowPointer.next; //start of secondhalf of list
  slowPointer.next = null;
  let prevNode = null;

  while (secondHalf) {
    //reverse second part of list
    let temp = secondHalf.next;
    secondHalf.next = prevNode;
    prevNode = secondHalf;
    secondHalf = temp;
  }

  let first = head;
  let second = prevNode;

  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }

  // let middleNode = slowPointer
  // let afterMiddleNode = slowPointer.next

  // while (afterMiddleNode && afterMiddleNode.next) {
  //   let nextNode = afterMiddleNode.next
  //   afterMiddleNode.next = nextNode.next
  //   nextNode.next = middleNode.next
  //   middleNode.next = nextNode
  // }

  // slowPointer = head;
  // fastPointer = middleNode.next

  // while (fastPointer) {
  //   middleNode.next = fastPointer.next
  //   fastPointer.next = slowPointer.next
  //   slowPointer.next = fastPointer
  //   slowPointer = fastPointer.next
  //   fastPointer = middleNode.next
  // }
};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
