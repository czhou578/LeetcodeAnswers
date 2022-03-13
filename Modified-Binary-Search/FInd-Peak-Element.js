/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  if (nums.length == 1) return 0

  let left = 0
  let right = nums.length - 1
   
  while (left <= right) {
    let middle = Math.floor((right - left) / 2)

    if (nums[middle] > nums[middle + 1] && nums[middle] > nums[middle - 1]) {
      return middle
    }

    if (middle === 0 && nums[middle + 1] < nums[middle]) return 0

    if (middle === nums.length - 1 && nums[middle - 1] < nums[middle]) return middle

    else if (nums[middle] < nums[middle - 1]) right = middle - 1

    else if (nums[middle] < nums[middle + 1]) left = middle + 1
  }   

  return -1
}

let test = [1,2,3,1]
console.log(findPeakElement(test));

/**
 * if left and right difference is 1, then the middle will be 0, even though it should be
 * the value of left. That is why we have to add the value of left to get middle.
 * 
 * draw out all the test cases before even starting to code
 * 
 */