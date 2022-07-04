/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let root = new TreeNode(preorder[0]);
  let middleIndex = inorder.indexOf(root.val);

  root.left = buildTree(
    preorder.slice(1, middleIndex + 1),
    inorder.slice(0, middleIndex)
  );
  root.right = buildTree(
    preorder.slice(middleIndex + 1),
    inorder.slice(middleIndex + 1)
  );

  return root;
};

/**
 * all the right tree values from root are after mid, so mid + 1
 * draw out the patterns by hand (inorder and postorder traversal) first
 */
