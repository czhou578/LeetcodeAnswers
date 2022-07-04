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
var isSubtree = function (root, subRoot) {
  if (!root) {
    return false;
  } else if (isSameTree(root, subRoot)) {
    return true;
  } else {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
};

function isSameTree(node, node2) {
  if (node === null || node2 === null) {
    return node === null && node2 === null;
  } else if (node.val === node2.val) {
    return (
      isSameTree(node.left, node2.left) && isSameTree(node.right, node2.right)
    );
  } else {
    return false;
  }
}

/**
 * Time complexity: O(m * n) where m and n are number of nodes
 */
