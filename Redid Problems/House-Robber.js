/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let rob1 = 0; //house at idx - 2
  let rob2 = 0; //house at idx - 1

  for (const num of nums) {
    let temp = Math.max(rob1 + num, rob2);
    rob1 = rob2; //rob1 takes old value of rob2
    console.log(rob1);
    rob2 = temp; //rob2 takes new value
    console.log(rob2);
  }

  return rob2;
};

console.log(rob([1, 2, 3, 1]));

/**
 * Time: O(n)
 * Space complexity: O(1)
 */
