class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
class LinkNodeList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  get length() {
    return this.size;
  }
  toString() {
    const ret = [];
    let p = this.head;
    if (!p) return 'empty';
    while (p.next) {
      ret.push(p.val);
      p = p.next;
    }
    ret.push(p.val);
    return ret.join('=>');
  }
  append(val) {
    const node = new ListNode(val);
    let p = this.head;
    if (this.head) {
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      this.head = node;
    }
    this.size++;
  }
}
module.exports = LinkNodeList;
