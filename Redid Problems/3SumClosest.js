/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  let sorted = nums.sort((a, b) => a - b)

  let closest = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < sorted.length - 2; i++) {
    let start = i + 1
    let end = sorted.length - 1

    while(start < end) {
      let sum = sorted[i] + sorted[start] + sorted[end]

      if (sum > target) {
        end--;
      } else {
        start++
      }

      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum
      }
    }
  }

  return closest
};

/**
 * Time: O(n)
 * space: O(n)
 */