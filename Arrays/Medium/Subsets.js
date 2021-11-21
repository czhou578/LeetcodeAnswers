/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  const result = []
  
  const dfs = (i, nums, slate) => {
      if (i === nums.length) {
          result.push(slate.slice())
          return result;
      }
      
      dfs(i + 1, nums, slate)
      
      slate.push(nums[i])
      dfs(i + 1, nums, slate)
      slate.pop();
  }
  
  dfs(0, nums, [])
  return result;
};