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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {

  if (!root) {
    return false
  } else if (isFound(root, subRoot)) {
    return true
  } else {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  }

  // let treeExists = false;
  
  // const dfs = (node, node2) => {
  //   if (node === null || node2 === false) return
  //   if (node === null && node2 === false) return
  //   if (node.val === node2.val) {
  //     treeExists = true
  //   } else {
  //     treeExists = false
  //   }

  //   dfs(node.left, node2.left)
  //   dfs(node.right, node2.right)

  // }

  // dfs(root, subRoot)

  // return treeExists

};

function isFound(node, node2) {
  if (node === null || node2 === null) {
    return 
  } else if (node.val === node2.val) {
    return isFound(node.left, node2.left) && isFound(node.right, node2.right)
  } else {
    return false
  }
}