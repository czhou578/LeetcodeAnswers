var findMin = function(nums) {
  let res = nums[0]
  let left = 0
  let right = nums.length - 1
  
  while (left <= right) {
    if (nums[left] < nums[right]) { //sorted case
      res = Math.min(res, nums[left])
      break
    } 
    
    let middle = Math.floor((left + right) / 2)
    res = Math.min(res, nums[middle]) //the middle might be the minimum element

    if (nums[middle] >= nums[left]) {
      left = middle + 1
    } else {
      right = middle - 1
    }

  }

  return res
};