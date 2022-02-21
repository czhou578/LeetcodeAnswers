/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let resultLength = Infinity;

  for (let i = 0; i < nums.length - 1; i++) {

    if (nums[i] >= target) {
      resultLength = Math.min(resultLength, 1)
    }

    let startIndex = i;
    let tempSum = nums[i];

    for (let j = startIndex + 1; j < nums.length; j++) {

      if (nums[j] === target) {
        resultLength = Math.min(resultLength, 1)
      }

      tempSum += nums[j]

      if (tempSum >= target) {
        resultLength = Math.min(resultLength, j - startIndex + 1)
      } 
    }
  }

  resultLength === Infinity ? 0 : resultLength

};

let nums = [1,1,1,1,7]
let temp = 7

console.log(minSubArrayLen(temp, nums));