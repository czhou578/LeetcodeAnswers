/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1

  while(leftPointer <= rightPointer) {
    let mid = Math.floor((rightPointer + leftPointer) / 2)

    if (nums[mid] === target) return mid //return index

    if (nums[leftPointer] <= nums[mid]) { //if furthest left element is smaller then mid

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

  return -1

};

/**
 * RunTime Complexity (Guess): O(log n) since we are reducingthe search array by half each time
 * Space Complexity(Guess): O(1)    
 */

let test = [1, 3, 5, 7, 10];
let target = 10;

console.log(search(test, target))