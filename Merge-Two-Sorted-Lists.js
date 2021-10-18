var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  
  let dummy = new ListNode(-1);
  let result = dummy
  
  while (l1 && l2) {
      if (l1.val < l2.val) {
          dummy.next = new ListNode(l1.val)
          dummy = dummy.next
          l1 = l1.next
      } else if (l1.val > l2.val) {
          dummy.next = new ListNode(l2.val)
          dummy = dummy.next
          l2 = l2.next

      } else if (l1.val == l2.val) {
          dummy.next = new ListNode(l1.val)
          dummy = dummy.next
          l1 = l1.next
          
          dummy.next = new ListNode(l2.val)
          dummy = dummy.next
          l2 = l2.next
      }
  }
  
  if (l1) dummy.next = l1
  if (l2) dummy.next = l2
      
  return result.next
};