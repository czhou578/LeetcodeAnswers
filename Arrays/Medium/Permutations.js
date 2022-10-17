/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, set = [], answers = []) {
  if (!nums.length) answers.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    const tempHold = nums.filter((number, index) => index != i);
    set.push(nums[i]);
    permute(tempHold, set, answers);
    set.pop();
  }

  return answers;
};
