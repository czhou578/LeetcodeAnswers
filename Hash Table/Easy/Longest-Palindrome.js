/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return true;

  let map = new Map();

  for (let x of s) {
    if (!map.has(x)) map.set(x, 1);
    else map.delete(x);
  }

  let array = Array.from(map.values());
  if (array.length <= 1) return s.length;
  else return s.length - array.length + 1;
};
