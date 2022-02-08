const LinkNodeList = require('.');
describe('Linked-List', () => {
  describe('Link-Node-List', () => {
    test('append', () => {
      const linkList = new LinkNodeList();
      linkList.append(1);
      linkList.append(2);
      linkList.append(3);
      linkList.append(4);
      expect(linkList.toString()).toBe('1=>2=>3=>4');
      expect(linkList.length).toBe(4);
    });
    test('empty', () => {
      const linkList = new LinkNodeList();
      expect(linkList.toString()).toBe('empty');
      expect(linkList.length).toBe(0);
    });
  });
});
