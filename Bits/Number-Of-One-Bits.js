/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  // let temp = n.toString()
  // let result = 0
  
  // for (let i = 0; i < temp.length; i++) {
  //   if (temp.charAt(i) === '1') {
  //     result++
  //   }
  // }

  // return result

  let result = 0;

  while (n) {
    result ++
    n &= n - 1
  }

  return result

};

/**
 * time complexity: O(1)
 * space complexity O(1)
 */