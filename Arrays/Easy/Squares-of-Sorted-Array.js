var sortedSquares = function(nums) {
  var resultArray = []
  
  for (let number of nums) {
    resultArray.push(Math.pow(number, 2))
  }

  resultArray.sort(function(a, b) {return a - b})
  return resultArray

};

let test = [-4,-1,0,3,10]

console.log(sortedSquares(test));