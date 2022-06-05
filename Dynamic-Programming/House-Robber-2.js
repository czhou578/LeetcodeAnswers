/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  let result = Math.max(nums[0], helper(nums, 1, nums.length), helper(nums, 0, nums.length - 1))
  return result
};

const helper = (nums, start, end) => {
  let rob1 = 0
  let rob2 = 0
  
  for (let i = start; i < end; i++) {
      let temp = Math.max(rob1 + nums[i], rob2)
      rob1 = rob2;
      rob2 = temp        
  }
  
  return rob2   
}

/**
 * Time: O(n)
 * space: O(1)
 */
