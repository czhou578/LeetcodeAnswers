/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  for (let element of nums) {
      if (nums.indexOf(element) !== nums.lastIndexOf(element)) {
          return true;
      }
  }
  
  return false;
};