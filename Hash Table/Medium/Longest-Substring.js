/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let leftPointer = 0;
  let result = 0;
  let set = new Set();

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
      while (set.has(s[rightPointer])) {
        set.delete(s[leftPointer])
        leftPointer++
      }
      set.add(s[rightPointer])
      result = Math.max(result, rightPointer - leftPointer + 1)
  }

  return result

};

let test = "pwwkew"

console.log('result: ' + lengthOfLongestSubstring(test));

/**
 * Sliding window classic problem
 * Time complexity: O(n)
 * Space complexity: O(n)
 */