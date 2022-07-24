function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let array = [];

  const dfs = (node, array) => {
    if (!node) {
      return;
    }

    dfs(node.left, array); //dfs with left node, and the !node will check to see if it was null
    array.push(node.val);
    dfs(node.right, array);
  };

  dfs(root, array);

  return array[k - 1]; //no need to traverse
};

/**
 * Similarities: checking null at beginning, push into array, inorder traversal, return from edge case, no adding null
 *
 * Differences: passing array, no need to traverse array, just use index. don't push
 *
 * Biggest mistake: inorder traversal is wrong. Supposed to go to the bottom of the tree and push, not at the beginning.
 *
 * O(N) time and space complexity
 */

console.log(kthSmallest([3, 1, 4, null, 2], 3));
