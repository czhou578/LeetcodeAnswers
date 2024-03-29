/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (nums.length === 1) return [nums[0]]; //edge case

  let result = [];

  let map = new Map(); //key insert order remembered

  for (let i = 0; i < nums.length; i++) {
    //count # of occurrences of each number
    if (map.get(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  let array = Array.from(map); //convert back into array

  array.sort(function (a, b) {
    //sort descending
    return b[1] - a[1];
  });

  for (let i = 0; i < k; i++) {
    //push into array the first k elements
    result.push(array[i][0]);
  }

  return result;

  // let result = []
  // let entryObj = {}

  // for (const element of nums) {
  //   if (entryObj[element]) {
  //     entryObj[element] += 1
  //   } else {
  //     entryObj[element] = 1
  //   }
  // }

  // let sortable = [];
  // for (let entry in entryObj) {
  //   sortable.push([entry, entryObj[entry]]);
  // }

  // sortable.sort(function(a, b) {
  //   return b[1] - a[1];
  // });

  // console.log(sortable);

  // // let sorted = Object.fromEntries(Object.entries(entryObj).sort(([_, a],[_, b]) => b - a))
  // // let keys = Object.keys(sorted)

  // for (let i = 0; i < k; i++) {
  //   result.push(parseInt(sortable[i][0]))
  // }

  // return result

  // // let result = Object.keys(entryObj)
};

/**
 * create map, sort descending, and then push into result
 * Time complexity: O(2n)
 * Space complexity: O(n)
 */

let test = [1];
console.log(topKFrequent(test, 1));
