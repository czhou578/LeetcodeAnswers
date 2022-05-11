/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
      
  let rob1 = 0
  let rob2 = 0
  
  for (const num of nums) {
      let temp = Math.max(rob1 + num, rob2)
      rob1 = rob2;
      rob2 = temp
  }
  
  return rob2
};

/**
 * Time: O(n)
 * Space complexity: O(1)
 */