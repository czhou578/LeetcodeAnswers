/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  if (nums.length == 1) return nums[0]

  let tempK = k - 1
  let temp = 1;

  nums.sort((a, b) => b - a) //sort descending

  if (k == 1) return nums[0]

  for (let i = 0; i < nums.length - 1; i++) {
    let firstPointer = nums[i]
    let secondPointer = nums[i + 1]

    if (temp == tempK) return secondPointer
    
    if (firstPointer !== secondPointer && temp < tempK || firstPointer === secondPointer) {
      temp++
    }

  }
};

let test = [-1,2,0]
console.log(findKthLargest(test, 1));