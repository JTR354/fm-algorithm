const LinkNodeList = require('../link-node-list');
const { removeElements, removeElements2 } = require('.');
describe('linked-list', () => {
  describe('remove-linked-list-elements', () => {
    test('203-1', () => {
      const head = [1, 2, 6, 3, 4, 5, 6],
        val = 6,
        result = [1, 2, 3, 4, 5];
      const nodeList = new LinkNodeList(head);
      removeElements(nodeList.head, val);
      expect(nodeList.toString()).toEqual(result);
      const nodeList2 = new LinkNodeList(head);
      removeElements2(nodeList2.head, val);
      expect(nodeList2.toString()).toEqual(result);
    });
    test('203-2', () => {
      const head = [],
        val = 1,
        result = [];
      const nodeList = new LinkNodeList(head);
      removeElements(nodeList.head, val);
      expect(nodeList.toString()).toEqual(result);

      const nodeList2 = new LinkNodeList(head);
      removeElements2(nodeList2.head, val);
      expect(nodeList2.toString()).toEqual(result);
    });
    test('203-3', () => {
      const head = [7, 7, 7, 7],
        val = 7,
        result = [];
      const nodeList = new LinkNodeList(head);
      removeElements(nodeList.head, val);
      expect(nodeList.toString()).toEqual(result);

      const nodeList2 = new LinkNodeList(head);
      removeElements2(nodeList2.head, val);
      expect(nodeList2.toString()).toEqual(result);
    });
  });
});
