/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  if (nums.length == 1 && nums[0] != target) {
    return -1

  } else if (nums.length == 1 && nums[0] == target){
    return 0;
  }
  
  const findZero = () => Math.min(...nums)

  let minIndex = nums.findIndex(findZero)
  let firstElement = nums[0];

  if (firstElement == target) return 0;

  if (nums[minIndex] == target) return minIndex;

  if (nums[minIndex] > firstElement && minIndex > 0) {
    if (target >= 0 && target < firstElement) {
      for (let i = minIndex; i < nums.length; i++) {
        if (nums[i] == target) return i;
      }
  
      return -1;
  
    } else if (target >= firstElement) {
      for (let i = 0; i < minIndex; i++) {
        if (nums[i] == target) return i;
      }
      
      return -1;
    }

  } else {
    const findElement = nums.findIndex((element) => element == target)
    return findElement
  }

};

let test = [1, 3, 5, 7, 10];
let target = 10;

console.log(search(test, target))