/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
  // if (root1 === null || root2 === null) return null

  // const dfs = (node1, node2) => {
    
  //   if (node1.left === null && node2.right === null && node2.left === null && node2.right === null) {
  //     return
  //   }

  //   if (!node1.left && !node1.right) {
  //     if (node2.left) {
  //       node1.left = node2.left

  //     } else if (node2.right) {
  //       node1.right = node2.right
  //     } 
  //   }

  //   if (!node2.left && !node2.right) {
  //     if (node1.left) {
  //       node1.left = node1.left

  //     } else if (node1.right) {
  //       node1.right = node1.right
  //     }
  //   }
    
  //   dfs(node1.left, node2.left)
  //   dfs(node1.right, node2.right)
  // }

  // dfs(root1,  root2)
  return dfs(root1, root2)
  
};

const dfs = (root1, root2) => {
  if (!root1 && !root2) return null
  if (!root1 || !root2) return root1 || root2

  root1.val += root2.val
  root1.left = dfs(root1.left, root2.left)
  root1.right = dfs(root1.right, root2.right)
  return root1
}