var singleNumber = function(nums) {
  var result = nums.sort(function(a,b) {
      return a - b;
  })

  console.log(result);
  
  for (let i = 0; i < result.length; i += 3) {
    if (result[i] != result[i + 1]) {
        return result[i]
    }
  }
};

let input = [2,2,3,2]

console.log(singleNumber(input));