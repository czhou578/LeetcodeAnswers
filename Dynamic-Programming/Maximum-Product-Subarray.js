/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  if (nums.length === 1) return nums[0]

  let array = nums.map((element) => element)

  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i]
    for (let j = 0; j < i; j++) {

      if (nums[i] * nums[j] < array[i] && i - j == 1)
      
      if (nums[i] * nums[j] < array[i] && i - j == 1) {
        array[i] = temp
        continue
      } else if (nums[i] * nums[j] >= nums[i]) {
        array[i] = Math.max(array[i], nums[i] * nums[j])
      }
    }
  }

  return Math.max(...array)
};

let test = [-2, 3, -1]
console.log(maxProduct(test));