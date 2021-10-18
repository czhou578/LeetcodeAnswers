var maxSubArray = function(nums) {

  let currentStreak = nums[0]
  let globalStreak = nums[0];
  
  for (let i = 1; i < nums.length; i++) {

    currentStreak = Math.max(nums[i], currentStreak + nums[i])
    
    if (currentStreak > globalStreak) {
      globalStreak = currentStreak;
    }
  }
  return globalStreak;

}


let test = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(test))