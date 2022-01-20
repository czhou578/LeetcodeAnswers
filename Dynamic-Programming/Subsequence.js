/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {

  let resultNum = []
  var counter = 1;

  resultNum[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        counter++
      } else {
        continue
      }
    }
    resultNum[i] = counter
    counter = 1;

  }

  return Math.max(...resultNum)
    
};

let test = [10,9,2,5,3,7]

console.log(lengthOfLIS(test));