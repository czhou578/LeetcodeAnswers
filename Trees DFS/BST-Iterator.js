/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.pointer = 0;
  this.array = dfs(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.array[this.pointer++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.pointer < this.array.length;
};

const dfs = (root, array = []) => {
  if (!root) return;
  dfs(root.left, array);
  array.push(root.val);
  dfs(root.right, array);

  return array;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
