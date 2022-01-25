/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {

  let sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 !== 0) return false

  let compareArray = new Array((sum / 2) + 1).fill(false)
  compareArray[0] = true;

  for (let num of nums) {
    for (let i = compareArray.length - 1; i >= num; i--) {
      compareArray[i] = compareArray[i] || compareArray[i - num]
    }
  }

  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = compareArray.length - 1; compareArray[j] - nums[i] >= 0; j--) {
  //     if (compareArray[j] === false && compareArray[j] - nums[i] === false) {
  //       continue
  //     } else if (compareArray[j] - nums[i] === false) {
  //       compareArray[j] = true
  //     }    
  //   }
  // }

  return compareArray[compareArray.length - 1] === true

};