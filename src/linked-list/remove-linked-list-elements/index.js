exports.removeElements = function removeElements(head, val) {
  if (head == null) {
    return head;
  }
  head.next = removeElements(head.next, val);
  if (head.val === val) {
    delete head.val;
    return head.next;
  }
  return head;
};
