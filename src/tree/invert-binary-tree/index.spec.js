const { invertTree } = require('.');
const BinaryTree = require('../binary-tree');

describe('tree', () => {
  describe('invert-binary-tree', () => {
    test('226-0', () => {
      const input = [4, 2, 7, 1, 3, 6, 9];
      const result = [4, 7, 2, 9, 6, 3, 1];
      const tree = new BinaryTree(input);
      invertTree(tree.root);
      expect(tree.toString()).toEqual(result);
    });
  });
});
