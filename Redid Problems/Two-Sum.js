/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  var resultArray = []
  for (let i = 0; i < nums.length - 1; i++) {
      let temp = nums[i]
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] + temp == target) {
              resultArray.push(j)
              resultArray.push(i)
          }
      }
  }
  return resultArray
};

/**
 * Time complexity: O(n^2)
 * space = O(n)
 */