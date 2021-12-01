/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  let maximumNumberOnes = 0;
  let right = 0;
  let left = 0;
  let counter = 0; //counts number of consecutive ones

  while (right < nums.length) {
    if (nums[right] == 1) {
      counter++;
      right++
    } else {
      maximumNumberOnes = Math.max(maximumNumberOnes, counter)
      counter = 0;
      left = right;
      right++;
    }
  }

  maximumNumberOnes = Math.max(maximumNumberOnes, counter)

  return maximumNumberOnes
};

let nums = [1,0,1,1,0,1]

console.log('result: ' + findMaxConsecutiveOnes(nums));
