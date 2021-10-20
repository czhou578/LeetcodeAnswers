/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const obj = {}

    if (nums.length == 1) return nums[0]

    for (let num of nums) {
      obj[num] = obj[num] ? obj[num] + 1 : 1;
    }

    return Object.keys(obj).find(key => obj[key] == 1);
};

let test = [4,1,2,1,2]

console.log(singleNumber(test))