module.exports = class BinaryTree {
  constructor(data = []) {
    this.root = new TreeNode(data[0]);
    this.root.left = new TreeNode(data[1]);
    this.root.right = new TreeNode(data[2]);
    this.root.left.left = new TreeNode(data[3]);
    this.root.left.right = new TreeNode(data[4]);
    this.root.right.left = new TreeNode(data[5]);
    this.root.right.right = new TreeNode(data[6]);
  }
  toString() {
    // 层序遍历
    const queue = [this.root];
    const ret = [];
    while (queue.length) {
      const root = queue.shift();
      if (root == null) continue;
      const val = root.val;
      ret.push(val);
      queue.push(root.left, root.right);
    }
    return ret;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
