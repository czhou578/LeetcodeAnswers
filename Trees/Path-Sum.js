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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(!root) return false

  let hasPath = false;

  const dfs = (node, sum) => {
    if (node.left === null && node.right === null) {
      if (sum === node.val) {
        hasPath = true;
      }
      return
    }

    if (node.left) {
      dfs(node.left, sum - node.val)
    }

    if (node.right) {
      dfs(node.right, sum - node.val)
    }

  }

  dfs(root, targetSum)
  return hasPath
};

/**
 * recursive solution 
 * sum is at top, subtract sum from value of reached node as you go left and right
 * O(n) for time and space complexity; value and sum same, that will be base case
 * 
 */