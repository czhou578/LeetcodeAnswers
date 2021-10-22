/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let firstPointer = m - 1;
  let secondPointer = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (secondPointer < 0) break;

    if (nums1[firstPointer] > nums2[secondPointer]) {
      nums1[i] = nums1[firstPointer]
      firstPointer--
    } else {
      nums1[i] = nums2[secondPointer]
      secondPointer--;
    }
  }

};

let test = [1,2,3,0,0,0]
let test2 = [2,5,6]
let m = 3;
let n = 3;

console.log(merge(test, m, test2, n))