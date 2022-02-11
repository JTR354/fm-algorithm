exports.hasCycle = (head) => {
  if (head == null) return false;
  const set = new Set();
  let p = head;
  while (p.next) {
    if (set.has(p.next)) {
      return true;
    }
    set.add(p.next);
    p = p.next;
  }
  return false;
};

exports.hasCycle2 = (head) => {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
};
