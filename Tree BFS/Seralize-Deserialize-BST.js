/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let result = [];

  const dfs = (node) => {
    if (!node) {
      result.push("N");
      return;
    }

    result.push("" + node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return result.join();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let vals = data.split(",");
  let i = 0;

  const dfs = () => {
    if (vals[i] == "N") {
      i++;
      return null;
    }

    let node = new TreeNode(parseInt(vals[i]));
    i++;
    node.left = dfs();
    node.right = dfs();
    return node;
  };

  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
