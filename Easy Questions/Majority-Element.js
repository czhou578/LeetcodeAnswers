var majorityElement = function(nums) {
  if (nums.length == 0) return -1
  
  let majorNum = nums.length / 2
  const countObj = {}
  
  for (const num of nums) {
      countObj[num]  = countObj[num] ? countObj[num] + 1 : 1 //if countobject entry exists, add to it, otherwise, assign it to 1
      if (majorNum < countObj[num]) return num
  }
  
  
};

let test = [2,2,1,1,1,2,2]
console.log(majorityElement(test));