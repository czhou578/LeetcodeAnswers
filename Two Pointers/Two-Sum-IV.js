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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
  if (!root) return false

  let set = new Set()

  const bfs = (node) => {
    if (!node) {
      return false
    }

    if (set.has(k - node.val)) return true

    set.add(node.val)

    const left = bfs(node.left)
    const right = bfs(node.right)
    
    return left || right
  }

  return bfs(root)
};

/**
 * Look at left and right subtrees. If not found, return false.
 * Time complexity: O(N)
 * space complexity: O(N)
 */