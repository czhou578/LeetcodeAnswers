/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  // if (nums.indexOf(0) !== -1 && nums.indexOf(0) !== 0) {
  //   let temp = nums[nums.indexOf(0)]
  //   nums[nums.indexOf(0)] = nums[0]
  //   nums[0] = temp
  // } else if (nums.indexOf(1) !== -1 && nums.indexOf(1) !== 0) {
  //   let temp = nums[nums.indexOf(0)]
  //   nums[nums.indexOf(0)] = nums[0]
  //   nums[0] = temp

  // } else if (nums.indexOf(2) !== -1 && nums.indexOf(2) !== 0) {
  //   let temp = nums[nums.indexOf(0)]
  //   nums[nums.indexOf(0)] = nums[0]
  //   nums[0] = temp
  // }

  // for (let i = 1; i < nums.length - 1; i++) {
  //   let pointer1 = i
  //   let pointer2 = i + 1

  //   for (let j = pointer2; j < nums.length; j++) {
  //     if (nums[pointer2])
  //   }
  // }

  // console.log(nums);

  // let pivot = 1
  // let startPointer = 0;
  // let endPointer = nums.length

  // while(startPointer < endPointer) {
  //   if (nums[startPointer] < pivot) {
  //     swap(nums, )
  //   } else if (nums[startPointer] > pivot) {
  //     swap(nums, startPointer, --endPointer)
  //   }
  // }

  if (nums === null || nums.length === 0) {
    return
  }

  let idx1 = 0;
  let idx2 = nums.length - 1

  for (let i = 0; i <= idx2; i++) {
    if (nums[i] === 0) {
      swap(nums, idx1, i)
      idx1++
    } else if (nums[i] === 2) {
      swap(nums, idx2, i)
      idx2--
      i--
    }
  }

};

const swap = (array, a, b) => {
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

let temp = [2,0,2,1,1,0]
sortColors(temp)

/**
 * Have 2 ranges where all the 0's are on the left and the 2's are on the right
 * Have a pointer to the end of the array, and when it decremends, it means the end has 100% the highest value
 * You do i-- in the else if because its possible that you are swapping 2 with a 2 in the ith position. 
 * 
 * Takeaway: Have one pointer in the beginning and end, and increment / decrement based on conditions
 */
