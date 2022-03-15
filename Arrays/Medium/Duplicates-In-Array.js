/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
  // if (nums.length == 1) return []

  // let results = []
  // let temp = nums[nums.length - 1]

  // for (let i = nums.length - 2; i >= 0; i++) {
  //   if (nums[i])
  // }
  let map = new Map()

  let results = []

  nums.forEach((element) => {
    if (!map.has(element)) {
      map.set(element, 1)
    } else {
      results.push(element)
    }
  })

  return results

};

//used map to solve this
//constant space: It means, the auxiliary space size, doesn't depends on the length of input array.