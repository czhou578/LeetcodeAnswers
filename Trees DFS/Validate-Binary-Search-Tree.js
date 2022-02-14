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
 var isValidBST = function(root) {
  return dfs(root, -Infinity, Infinity)
};

const dfs = (node, low, high) => {
  if (!node) return true

  return node.val > low && node.val < high &&
    dfs(node.left, low, node.val) && dfs(node.right, node.val, high)

  // if (node.left.val > node.val || node.right.val < node.val) {
  //   return false
  // }

  // dfs(node.left, )
}

/**
 * Use ranges like infinity and negative infinity to do this problem.
 * Time complexity if O(n) since we have to traverse the whole tree. 
 *
 */

