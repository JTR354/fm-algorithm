const { maxDepth } = require('.');
const BinaryTree = require('../binary-tree');
describe('tree', () => {
  describe('max-depth', () => {
    test('104-0', () => {
      const input = [3, 9, 20, null, null, 15, 7];
      const tree = new BinaryTree(input);
      const result = 3;
      expect(maxDepth(tree.root)).toBe(result);
    });
  });
});
