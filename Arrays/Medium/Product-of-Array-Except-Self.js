
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  let leftArray = new Array(nums.length).fill(0)
  leftArray[0] = 1

  let rightArray = new Array(nums.length).fill(0)
  rightArray[rightArray.length - 1] = 1

  for (let i = 1; i < nums.length; i++) {
    leftArray[i] = leftArray[i - 1] * nums[i - 1]
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    rightArray[j] = rightArray[j + 1] * nums[j + 1]
  }

  for (let k = 0; k < nums.length; k++) {
    nums[k] = leftArray[k] * rightArray[k];
  }

  return nums;
};