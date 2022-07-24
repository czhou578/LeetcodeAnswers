function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;

  let max = 0;

  const dfs = (node) => {
    if (!node) return 0; //leaf node

    let left = dfs(node.left); //traverse left tree
    let right = dfs(node.right); //traverse right tree

    max = Math.max(left + right, max); //look at left and right values

    return Math.max(left, right) + 1; //move up one layer, have to account for current layer
  };

  dfs(root);

  return max;
};

/**
 * keeping track of counters. Dfs to the farthest left and right and as you move back up, add and
 * compare. Only take in one node parameter since return gives us value needed to proceed.
 *
 * time complexity o(n) and space complexity o(n). Worst case is if tree only is one sided, which
 * is when we need to traverse the entire tree.
 */

console.log(diameterOfBinaryTree([1, 2, 3, 4, 5]));
