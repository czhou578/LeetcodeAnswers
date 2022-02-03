/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  // if (root == null) return null
  let result = null
  
  const dfs = (node) => {
    if (node === null) return false

    // dfs(node.left)
    // dfs(node.right)

    // if (node.val === q.val || node.val === p.val) {
    //   return true;
    // }

    let left = dfs(node.left)
    let right = dfs(node.right)

    let current = node === p || node === q;

    if (left + right + current >= 2) { //true is 1, false is 0, 
      result = node
    }

    return left || right || current
  }

  dfs(root)
  return result
};

/**
 * draw it out. Check is right, left, and current are true.
 */