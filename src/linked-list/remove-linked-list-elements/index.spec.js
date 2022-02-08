const LinkNodeList = require('../link-node-list');
const { removeElements } = require('.');
describe('linked-list', () => {
  describe('remove-linked-list-elements', () => {
    test('203-1', () => {
      const head = [1, 2, 6, 3, 4, 5, 6],
        val = 6;
      const nodeList = new LinkNodeList(head);
      removeElements(nodeList.head, val);
      expect(nodeList.toString()).toEqual([1, 2, 3, 4, 5]);
    });
    test('203-2', () => {
      const head = [],
        val = 1;
      const nodeList = new LinkNodeList(head);
      removeElements(nodeList.head, val);
      expect(nodeList.toString()).toEqual([]);
    });
    test('203-3', () => {
      const head = [7, 7, 7, 7],
        val = 7;
      const nodeList = new LinkNodeList(head);
      removeElements(nodeList.head, val);
      expect(nodeList.toString()).toEqual([]);
    });
  });
});
