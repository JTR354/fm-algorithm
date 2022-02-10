exports.removeElements = function removeElements(head, val) {
  if (head == null) {
    return head;
  }
  head.next = removeElements(head.next, val);
  if (head.val === val) {
    const next = head.next;
    delete head.next;
    delete head.val;
    return next;
  }
  return head;
};

exports.removeElements2 = (head, val) => {
  const ele = { next: head };
  let p = ele;
  while (p.next) {
    if (p.next.val === val) {
      const next = p.next.next;
      delete p.next.val;
      delete p.next.next;
      p.next = next;
      continue;
    }
    p = p.next;
  }
  return ele.next;
};
