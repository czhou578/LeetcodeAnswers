/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  let result = nums.length

  for (let i = 0; i < nums.length; i++) {
    result += (i - nums[i]) //always evaluate to 0 unless it hits the missing number
  }

  return result

};

/**
 * Time complexity: O(2n)
 * space complexity: O(1)
 */