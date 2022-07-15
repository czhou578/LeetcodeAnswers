/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // if (nums.length === 1) return 0;

  // let left = 0;
  // let right = nums.length - 1;

  // let leftSum = nums[left];
  // let rightSum = nums[right];

  // while (left <= right) {
  //   console.log(leftSum);
  //   console.log(rightSum);

  //   if (leftSum < rightSum) {
  //     left++;
  //     leftSum += nums[left];
  //   }

  //   if (leftSum > rightSum) {
  //     right--;
  //     rightSum += nums[right];
  //   }

  //   if (leftSum === rightSum) return ++left;
  // }

  // return -1;

  let sum = nums.reduce((sum, curr) => sum + curr, 0);
  console.log("sum: " + sum);
  let preSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];

    if (sum == preSum) return i;

    preSum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1, 2, 3]));
