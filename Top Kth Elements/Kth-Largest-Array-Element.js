/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  if (nums.length == 1) return nums[0]

  /**
   * Variable temp starts at 1 and represents the kth largest element currently, which will
   * be incremented every time we loop.
   * 
   * If the temp is less then k, then we increment variable temp.
   */

  let temp = 1;

  nums.sort((a, b) => b - a) //sort descending

  if (k == 1) return nums[0]

  for (let i = 0; i < nums.length; i++) {

    if (temp == k) {
      return nums[i]
    }
    
    temp++
  }
};