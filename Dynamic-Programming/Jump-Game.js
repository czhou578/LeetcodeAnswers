/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let lastIndex = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= lastIndex) {
      lastIndex = i
    }
  }

  return lastIndex === 0
};

/**
 * have last index repeatedly store the lastindex that can be reached.
 * add the index and value of index and see if you can reach the lastindex
 * 
 * Time Complexity: O(n)
 * Space complexity: O(1)
 */