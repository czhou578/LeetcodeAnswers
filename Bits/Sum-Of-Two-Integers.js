/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
    if (b == 0) {
      return a
    } else {
      return getSum(a^b, (a&&b)<<1)
    }
};

/**
 * time complexity: O(n)
 * space complexity: O(1)
 */