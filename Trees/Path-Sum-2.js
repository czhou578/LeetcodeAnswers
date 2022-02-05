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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  if (!root) return []

  let resultArray = []

  const dfs = (node, sum, slate) => {
    if (node.left === null && node.right === null) {
      if (sum === node.val) {
        slate.push(node.val)
        resultArray.push(slate.slice())
        slate.pop()
        // return
      }
    }

    // if (node.val !== )
    if (node.left) {
      slate.push(node.val)
      dfs(node.left, sum - node.val, slate)
      slate.pop()
    }

    if (node.right) {
      slate.push(node.val)
      dfs(node.right, sum - node.val, slate)
      slate.pop()
    }
  }

  dfs(root, targetSum, [])
  return resultArray
};

/**
 * same as path sum one, except pop off after every dfs is finished.
 */