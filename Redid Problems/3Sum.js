/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {

  let result = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue

    let left = i + 1;
    let right = nums.length - 1

    while (left < right) {
      let threeSum = nums[left] + nums[right] + nums[i]

      if (threeSum > 0) {
        right--
      } else if (threeSum < 0 ) {
        left++
      } else {
        result.push([nums[left], nums[right], nums[i]])
        left++

        while (nums[left] === nums[left - 1] && left < right) {
          left++
        }
      }
    }
  }

  return result
};

// if (nums.length <= 2) return []

// let sortedArray = nums.sort((a, b) => a - b)
// let arrayBeforeSet = []

// for (let i = 0; i < sortedArray.length - 3; i++) { //pointer 1
//   if (sortedArray[i] >= 0) break;
  
//   let pointer1 = sortedArray[i]
//   let pointer2 = sortedArray[i + 1]      
  
//   for (let j = i + 2; j < sortedArray.length; j++) {
//     if (pointer1 + pointer2 + sortedArray[j] === 0) {
//       arrayBeforeSet.push([pointer1, pointer2, sortedArray[j]])
//     }
//   }
// }

// return arrayBeforeSet

// nums.sort((a, b) => a - b)
// let result = []

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === nums[i - 1]) continue
  
//   let target = nums[i] * -1
//   let subResult = dfs (i + 1, target, nums)
//   result.push(...subResult)
// }

// return result

const dfs = (start, target, nums) => {
  let lastPointer = nums.length - 1;
  let subResult = []

  while(start < lastPointer) {
    if (nums[start] + nums[lastPointer] === target) {

      subResult.push([(target * -1), nums[start], nums[lastPointer]])
      while (start < lastPointer && nums[start] === nums[start + 1]) start++
      while (start < lastPointer && nums[lastPointer] === nums[lastPointer + 1]) lastPointer--

      start++
      lastPointer--

    } else if (nums[start] + nums[lastPointer] > target) {
      lastPointer--;

    } else if (nums[start] + nums[lastPointer] < target) {
      start++
    }

  }

  return subResult
}

/**
 * Repeating the theme of one pointer at beginning and one pointer at the end. 
 * 
 * Time complexity: O(n^2)
 * space complexity: O(n)
 */
