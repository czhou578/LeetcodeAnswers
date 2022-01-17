/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let array = new Array(n + 1)
  
  array[0] = 1;
  array[1] = 1;

  for (let i = 2; i < array.length; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }

  return array[n]
};