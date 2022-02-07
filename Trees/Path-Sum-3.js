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
 * @return {number}
 */
var paths

var pathSum = function(root, targetSum) {
  paths = 0;
  
  traverseTree(root, targetSum)

  return paths
};

function traverseTree(node, sum) {
  if (node === null) return 0 

  findSum(node, sum)

  traverseTree(node.left, sum)
  traverseTree(node.right, sum)

}

function findSum(node, sum) {
  if (node === null) return
  if (node.val === sum) paths++

  findSum(node.left, sum - node.val)
  findSum(node.right, sum - node.val)

}