


// Definition for a binary tree node.
public class TreeNode {
      int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
 
class Solution {
  public TreeNode constructMaximumBinaryTree(int[] nums) {
      return constructMaximumBinaryTree(nums, 0, nums.length - 1);
  }

  public TreeNode constructMaximumBinaryTree(int[] nums, int start, int end) {
    if (start > end) {
      return null;
    }    
    
    int currentMaxValuePosition = start;
    

  for (int i = start + 1; i <= end; i++) {

    if (nums[i] > nums[currentMaxValuePosition]) {
      currentMaxValuePosition = i;
    }
  }

  TreeNode root = new TreeNode(nums[currentMaxValuePosition]);

  root.left = constructMaximumBinaryTree(nums, start, currentMaxValuePosition - 1);
  root.right = constructMaximumBinaryTree(nums, currentMaxValuePosition + 1, end);

  return root;

  }
}

/**
 * recursive approach, find the current max value position and create a tree node for that. 
 * Do the same for the left and the right. 
 * 
 * 1. I didn't think of using a recursive approach
 * I am not quite familiar with java, as i use js
 * i got the indexes wrong in the for loop
 * Takeaway: think of steps that you can do repeatedly until you hit a base case. Consider rcursion for this dfs problem.
 */