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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const maxDepth = (root) => {
    if (!root) return [true, 0];

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
    return [balanced, Math.max(left[1], right[1]) + 1];
  };

  return maxDepth(root)[0];
};
