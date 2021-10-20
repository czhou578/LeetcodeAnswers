/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {

  var result = []
  var rangeArray = [];

  for (var i = 1; i <= nums.length; i++) {
     rangeArray.push(i);
  }
  console.log(rangeArray);

  for (let ele of rangeArray) {
    if (!nums.includes(ele)) {
      result.push(ele)
    }
  }

  return result
};

let test = [1,1]

console.log(findDisappearedNumbers(test));