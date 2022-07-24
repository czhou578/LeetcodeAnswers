function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 1) {
    let root = new TreeNode(nums[0]);
    return root;
  }

  return constructBST(nums, 0, nums.length - 1);
};

function constructBST(nums, low, high) {
  if (low > high) return null;

  let mid = low + Math.floor((high - low) / 2);

  let node = new TreeNode(nums[mid]);
  node.left = constructBST(nums, low, mid - 1);
  node.right = constructBST(nums, mid + 1, high);

  return node;
}

console.log(sortedArrayToBST([-10, -3, 0]));

/**
 * Time Complexity: O(n) because we need to visit every element in array to build the tree
 * Space: O(n) because the size of tree is dependent on the number of nodes in the given array.
 */
