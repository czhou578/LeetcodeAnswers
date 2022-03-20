/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  let left = 0
  let right = nums.length - 1
  
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (middle === nums.length - 1) return nums[0] //if list is sorted ascending order and the lowest element is at the very beginning

    if (nums[middle + 1] < nums[middle]) { //if the middle is the greatest element, means that the next element is the least
      return nums[middle + 1]

    } else if (nums[middle + 1] > nums[middle] && nums[middle - 1] > nums[middle]) { // if previous and next elements are both greater, then middle is the least
      return nums[middle]
    }

    if(nums[middle] < nums[left] && nums[middle] < nums[right]) { 
      right = middle - 1

    } else if (nums[middle + 1] && nums[middle + 1] > nums[middle]) {
      left = middle + 1
    }

  }

};

let test = [5,1,2,3,4]
console.log(findMin(test));

/**
 * Run Time: O(log n)
 * Space Time O(1)
 * CONGRATS COLIN!
 */