/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {

  let leftPointer = 0;
  let rightPointer = nums.length - 1

  while(leftPointer <= rightPointer) {
    let mid = Math.floor(leftPointer + (rightPointer - leftPointer) / 2)

    if (nums[mid] === target) return true

    if (nums[leftPointer] === nums[mid] && nums[rightPointer] === nums[mid]) {
      rightPointer--
      leftPointer--
    } else if (nums[leftPointer] <= nums[mid]) {

      if (nums[leftPointer] <= target && target <= nums[mid]) {
        rightPointer = mid - 1
      } else {
        leftPointer = mid + 1
      }

    } else {
      if (nums[mid] <= target && target <= nums[rightPointer]) {
        leftPointer = mid + 1
      } else {
        rightPointer = mid - 1
      }
    }
  }

  return false

};

let test = [1,0,1,1,1]
console.log(search(test, 0));

/**
 * Run time complexity: O(log n) since we are dividing every loop
 * Space time: O(1)
 * 
 * I didn't fully comprehend the last case, which is when the left pointer equals the middle pointer. That should have been
 * obvious from the test case i was failing from the beginning. This would mean that the first half would not be in order ascending
 * 
 * Move left and right pointers to the center by 1. NEW STRATEGY
 */
