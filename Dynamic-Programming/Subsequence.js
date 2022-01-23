/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {

  if (nums.length == 0) return 0;

  let array = new Array(nums.length).fill(1)

  array[0] = 1

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        array[i] = Math.max(array[i], array[j] + 1)
      } else {
        continue;
      }    
    }
  }

  return Math.max(...array)
    
};

let test = [10,9,2,5,3,7]

console.log(lengthOfLIS(test));