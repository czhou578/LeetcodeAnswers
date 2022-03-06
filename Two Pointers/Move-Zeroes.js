/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums[0] === 0 && nums.length == 1) return

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      let temp = nums.splice(i, 1)
      nums.push(temp[0])
    }
  }

};

let temp = [0,1,0,3,12]
moveZeroes(temp);

/**
 * start from back since splicing won't affect indexes (REMEMBER)
 */