/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];

  // let array = nums.map((element) => element)

  // for (let i = 1; i < nums.length; i++) {
  //   let temp = nums[i]
  //   for (let j = 0; j < i; j++) {

  //     if (nums[i] * nums[j] < array[i] && i - j == 1)

  //     if (nums[i] * nums[j] < array[i] && i - j == 1) {
  //       array[i] = temp
  //       continue
  //     } else if (nums[i] * nums[j] >= nums[i]) {
  //       array[i] = Math.max(array[i], nums[i] * nums[j])
  //     }
  //   }
  // }

  // return Math.max(...array)

  let result = Math.max(...nums);
  let minProduct = 1;
  let maxProduct = 1;

  for (const number of nums) {
    /**
     * special case: if we multiply a subarray sequence by 0, its going to be 0 forever,
     * so reset the min and max products to 1 and skip to next loop
     */
    if (number == 0) {
      minProduct = 1;
      maxProduct = 1;
      continue;
    }

    /**
     * We are calculating minProduct using the maxProduct calculated above, so we save
     * the initial maaxProduct * number in a temp variable
     */

    let temp = maxProduct * number;

    maxProduct = Math.max(number * minProduct, number * maxProduct, number);
    minProduct = Math.min(temp, number * minProduct, number);
    result = Math.max(result, maxProduct);
  }

  return result;
};

//Complexity is O(n) for time complexity and O(1) for space since we are not using extra array

let test = [-2, 3, -1];
console.log(maxProduct(test));
