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
    
};

var deleteDuplicates = function(head) {
  if (!head || !head.next) return head

  let dummyHead = new ListNode(0)
  dummyHead.next = head

  let previous = dummyHead
  let current = head

  while(current) {

    while (current.next && current.next.val === current.val) {
      current = current.next
    }

    if (previous.next == current) { //if previous and current are next to each other, previous points to same as current
      previous = previous.next
    } else {
      previous.next = current.next
    }
    current = current.next

  }

  return dummyHead.next
};