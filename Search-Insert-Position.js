var searchInsert = function(nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  
  while (leftIndex < rightIndex) {
      var middle = Math.floor((rightIndex + leftIndex) / 2)
      
      if (nums[middle] == target) {
          return middle;
      }
      
      if (target > nums[middle]) {
          leftIndex = middle + 1;
      }
      
      if (target < nums[middle]) {
          rightIndex = middle;
      }
      
  }
    if (leftIndex == nums.length - 1 && nums[leftIndex] < target) {
      return rightIndex + 1;
    } else {
      return rightIndex;
    }

};

let nums = [1]
console.log(searchInsert(nums, 7));

