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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null

  let left = root.left
  let right = root.right

  root.left = right
  root.right = left;

  invertTree(root.left)
  invertTree(root.right)
  // const dfs = (leftNode, rightNode) => {
  //   if (!leftNode || !rightNode) return 

  //   let value = dfs(leftNode.left, rightNode.right)
  //   let valueRight = dfs(rightNode.left, rightNode.right)
  // }

  // dfs(root.left, root.right)
  return root
};