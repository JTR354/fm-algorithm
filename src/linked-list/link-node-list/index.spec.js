const LinkNodeList = require('.');
describe('Linked-List', () => {
  describe('Link-Node-List', () => {
    test('append', () => {
      const linkList = new LinkNodeList();
      linkList.append(1);
      linkList.append(2);
      linkList.append(3);
      linkList.append(4);
      expect(linkList.toString()).toEqual([1, 2, 3, 4]);
      expect(linkList.length).toBe(4);
    });
    test('init', () => {
      const head = [1, 2, 3, 4];
      const linkList = new LinkNodeList(head);
      expect(linkList.toString()).toEqual(head);
      expect(linkList.length).toBe(head.length);
    });
    test('empty', () => {
      const linkList = new LinkNodeList();
      expect(linkList.toString()).toEqual([]);
      expect(linkList.length).toBe(0);
    });
  });
});
