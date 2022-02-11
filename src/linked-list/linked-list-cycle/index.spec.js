const LinkNodeList = require('../link-node-list');
const { hasCycle, hasCycle2 } = require('.');
describe('linked-list', () => {
  describe('linked-list-cycle', () => {
    test('141-0', () => {
      const head = [3, 2, 0, -4],
        pos = 1,
        result = true;
      const nodeList = new LinkNodeList(head);
      nodeList.setPos(pos);
      expect(hasCycle(nodeList.head)).toBe(result);
      expect(hasCycle2(nodeList.head)).toBe(result);
    });
    test('141-1', () => {
      const head = [1, 2],
        pos = 0,
        result = true;
      const nodeList = new LinkNodeList(head);
      nodeList.setPos(pos);
      expect(hasCycle(nodeList.head)).toBe(result);
      expect(hasCycle2(nodeList.head)).toBe(result);
    });
    test('141-2', () => {
      const head = [1],
        pos = -1,
        result = false;
      const nodeList = new LinkNodeList(head);
      nodeList.setPos(pos);
      expect(hasCycle(nodeList.head)).toBe(result);
      expect(hasCycle2(nodeList.head)).toBe(result);
    });
  });
});
