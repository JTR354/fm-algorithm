exports.invertTree = function invertTree(root) {
  // 2. 写中止条件
  if (root == null) return root;
  // 1. 先找到最小子问题
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
