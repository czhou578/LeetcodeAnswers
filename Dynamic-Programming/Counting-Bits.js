/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  const arr = Array(n + 1).fill(0);
  for (let i = 1; i <= n; ++i) {
    if (i % 2 != 0)
      arr[i] = arr[i - 1] + 1;
    else
      arr[i] = arr[i / 2]
  }
  return arr;
};

console.log(countBits(5));