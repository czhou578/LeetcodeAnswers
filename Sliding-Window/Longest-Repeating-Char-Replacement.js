/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let count = {};
  let result = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (count[s[right]]) {
      count[s[right]] = 1 + count[s[right]];
    } else {
      count[s[right]] = 0;
    }

    while (right - left + 1 - Math.max(Object.values(count)) > k) {
      count[s[left]] -= 1;
      left += 1;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};

/**
 * O(n) time complexity
 * O(1) space complexity
 */

let string1 = "ABBB";
let num = 3;

console.log(characterReplacement(string1, num));
