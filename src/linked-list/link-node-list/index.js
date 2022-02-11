class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
class LinkNodeList {
  constructor(head) {
    this.head = null;
    this.init(head);
  }
  init(head) {
    head?.forEach((val) => this.append(val));
  }
  get length() {
    return this.toString().length;
  }
  toString() {
    const ret = [];
    let p = this.head;
    if (!p) return ret;
    const cache = new Set();
    do {
      if (cache.has(p)) {
        ret.push(p.val);
        break;
      }
      if (p.val != null) {
        ret.push(p.val);
      }
      cache.add(p);
      p = p.next;
    } while (p);
    return ret;
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
  }
  setPos(pos) {
    if (pos == null) return;
    let p = this.head,
      i = 0,
      tmp;
    while (p.next) {
      if (i === pos) {
        tmp = p;
      }
      p = p.next;
      i++;
    }
    p.next = tmp;
  }
}
module.exports = LinkNodeList;
