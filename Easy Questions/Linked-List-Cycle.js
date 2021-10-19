var hasCycle = function(head) {
  let slowPointer = head;
  let fastPointer = head;
  
  while (fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next
      
      if (slowPointer == fastPointer) {
          return true;
      }
  }
  
  return false;
};