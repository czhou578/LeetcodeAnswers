var search = function(nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  
  while(leftIndex <= rightIndex) {
      let middle = Math.floor((leftIndex + rightIndex) / 2)
      
      if (nums[middle] == target) {
          return middle;
      }
      
      if (target > nums[middle]) {
          leftIndex = middle + 1;
      } else if (target < nums[middle]) {
          rightIndex = middle - 1;    
      }
  }
  
  return -1;

}