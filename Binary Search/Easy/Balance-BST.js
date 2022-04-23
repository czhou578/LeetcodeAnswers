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
 var balanceBST = function(root) {
  if (root == null) return root

  let sorted = sortTree(root, [])
  return constructTree(sorted, 0, sorted.length - 1)
};

const sortTree = (node, array) => {
  if (node === null) return 

  sortTree(node.left, array)
  array.push(node.val)
  sortTree(node.right, array)
  return array
}

const constructTree = (sorted, low, high) => {
  if (low > high) return null;

  let mid = low + Math.floor((high - low) / 2)

  let node = new TreeNode(sorted[mid])

  node.left = constructTree(sorted, low, mid - 1)
  node.right = constructTree(sorted, mid + 1, high)
  return node
}

/**
 * Time complexity: O(n^2)
 * space = O(n)
 */