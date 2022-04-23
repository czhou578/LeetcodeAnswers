/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
  let count = 0;
  
  nums.sort((a, b) => a - b)
  for (let i = 0, j = nums.length - 1; i < j;) {
    if (nums[i] + nums[j] > k) {
      j--;
    } else if (nums[i] + nums[j] < k) {
      i++
    } else {
      count++
    }
  }

  return count
};

/**
 * Time complexity: O(n)
 * space = O(1)
 */