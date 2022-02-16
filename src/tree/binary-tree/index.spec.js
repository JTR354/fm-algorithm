const BinaryTree = require('.');

describe('tree', () => {
  describe('binary-tree', () => {
    test('create binary tree', () => {
      const input = [3, 9, 20, null, null, 15, 7];
      expect(new BinaryTree(input).toString()).toEqual(input);
      const input2 = [4, 2, 7, 1, 3, 6, 9];
      expect(new BinaryTree(input2).toString()).toEqual(input2);
    });
  });
});
