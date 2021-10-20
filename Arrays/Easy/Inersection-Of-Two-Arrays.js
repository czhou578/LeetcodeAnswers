/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  var result = []

  for (let element of nums1) {
    if (nums2.includes(element) && !result.includes(element)) {
      result.push(element)
    }
  }

  return result;
};

let test1 = [1,2,2,1]
let test2 = [2,2]

console.log(intersection(test1, test2))