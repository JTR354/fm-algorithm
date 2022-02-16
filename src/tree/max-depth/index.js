exports.maxDepth = function maxDepth(root) {
  // 2. 中止条件, 没有子节点的时候返回 0
  if (root == null) return 0;
  // 1. 最小子问题, 左子树 深度 和 右子树 深度的 最大值
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
