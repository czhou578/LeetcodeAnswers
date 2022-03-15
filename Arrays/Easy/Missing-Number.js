/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {

  nums.sort((a, b) => a - b)
  let tempArray = Array.from(Array(nums.length).keys())
  
  for (let i = 0; i < tempArray.length; i++) {
    if (!nums.includes(tempArray[i])) {
      return tempArray[i]
    }
  }

  return tempArray.length

};